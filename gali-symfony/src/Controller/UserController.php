<?php
namespace App\Controller;

use App\Repository\RolesRepository;
use App\Repository\UserRepository;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\User;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Encoder\EncoderFactoryInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Twig\Environment;

class UserController
{
    public function registerUser
    (
        Request $request,
        ObjectManager $manager,
        RolesRepository $rolesRepository,
        EncoderFactoryInterface $encoderFactory,
        ValidatorInterface $validator,
        Environment $twig,
        \Swift_Mailer $mailer,
        SessionInterface $session
    )
    {
        //request parameters
        $username = $request->request->get('username');
        $firstName = $request->request->get('firstname');
        $lastName = $request->request->get('lastname');
        $email = $request->request->get('email');
        $gender = $request->request->get('gender');
        $password = $request->request->get('password');
        $confirmPassword = $request->request->get('confirm-password');

        //user to be registered
        $user = new User();
        $user->setUsername($username ?? '');
        $user->setFirstname($firstName ?? '');
        $user->setLastname($lastName ?? '');
        $user->setEmail($email ?? '');
        $user->setGender($gender ?? 0);
        $user->setPassword($password ?? '');

        //input errors
        $usernameError = $validator->validateProperty($user, 'username');
        $firstNameError = $validator->validateProperty($user, 'firstname');
        $lastNameError = $validator->validateProperty($user, 'lastname');
        $emailError = $validator->validateProperty($user, 'email');
        $genderError = $validator->validateProperty($user, 'gender');
        $passwordError = $validator->validateProperty($user, 'password');
        $confirmPasswordError = ($confirmPassword !== $password || empty($confirmPassword));

        //array of errors
        $formErrors = [];

        if(count($usernameError) > 0) {
            $formErrors['usernameError'] = $usernameError[0]->getMessage();
        }

        if(count($firstNameError) > 0) {
            $formErrors['firstNameError'] = $firstNameError[0]->getMessage();
        }

        if(count($lastNameError) > 0) {
            $formErrors['lastNameError'] = $lastNameError[0]->getMessage();
        }

        if(count($emailError) > 0) {
            $formErrors['emailError'] = $emailError[0]->getMessage();
        }

        if(count($genderError) > 0) {
            $formErrors['genderError'] = $genderError[0]->getMessage();
        }

        if(count($passwordError) > 0) {
            $formErrors['passwordError'] = $passwordError[0]->getMessage();
        }

        if($confirmPasswordError) {
            $formErrors['confirmPasswordError'] = "This value should not be blank.";
        }

        if($formErrors) {
            $formErrors['status'] = 1;
            return new JsonResponse($formErrors);
        }

        $salt = md5($user->getUsername());
        $user->setSalt($salt);

        $encoder = $encoderFactory->getEncoder(User::class);

        $password = $encoder->encodePassword(
            $user->getPassword(),
            $salt
        );

        $userRole = $rolesRepository->findOneByRole('ROLE_USER');
        if(!$userRole) {
            throw new NotFoundHttpException('ROLE_USER not found in the DB');
        }

        $user->setPassword($password);
        $user->setRoles($userRole);
        $user->setCreateTime(new \DateTime('now'));

        $manager->persist($user);
        $manager->flush();

        //To send an email with Swift_Mailer
        $message = new \Swift_Message();
        $message->setFrom('info@gali.com')
            ->setTo($user->getEmail())
            ->setSubject('Validate your account.')
            ->setContentType('text/html')
            ->setBody(
                $twig->render(
                    'Mail/accountCreation.html.twig',
                    ['user' => $user]
                )
            )->addPart(
                $twig->render(
                    'Mail/accountCreation.txt.twig',
                    ['user' => $user]
                ),
                'text/plain'
            );

        $mailer->send($message);
        $session->getFlashBag()->add('info', 'User successfully registered !');

        return new JsonResponse([
            'status' => 0,
            'message' => 'User successfully created'
        ]);
    }

    public function loginUser
    (
        AuthenticationUtils $authUtils,
        Environment $twig
    )
    {
        return new Response(
            $twig->render(
                'Security/login.html.twig',
                [
                    'last_username' => $authUtils->getLastUsername(),
                    'error' => $authUtils->getLastAuthenticationError()
                ]
            )
        );
    }

    public function usernameAvailable
    (
        Request $request,
        UserRepository $repository
    )
    {
        $username = $request->request->get('username');

        $unavailable = false;
        if (!empty($username)) {
            $unavailable = $repository->usernameExist($username);
        }

        return new JsonResponse(
            [
                'available' => !$unavailable
            ]
        );
    }

    public function activateUser
    (
        $token,
        ObjectManager $manager,
        SessionInterface $session,
        UrlGeneratorInterface $urlGenerator
    )
    {
        $userRepository = $manager->getRepository(User::class);

        $user = $userRepository->findOneByEmailToken($token);
        if(!$user) {
            throw new NotFoundHttpException('User not found for the given token');
        }

        $user
            ->setIsActive(true)
            ->setEmailToken(null);

        $manager->flush();

        $session->getFlashBag()->add('info', 'User successfully activated !');

        return new RedirectResponse($urlGenerator->generate('home_page'));
    }
}