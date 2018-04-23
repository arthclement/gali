<?php
namespace App\Controller;

use App\Repository\RolesRepository;
use Symfony\Component\Form\Extension\Core\Type\FormType;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\User;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Encoder\EncoderFactoryInterface;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\DependencyInjection\Compiler\RepeatedPass;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Twig\Environment;
use Symfony\Component\HttpFoundation\Response;

class UserController
{
    public function registerUser
    (
        Request $request, 
        FormFactoryInterface $factory,
        ObjectManager $manager,
        UrlGeneratorInterface $urlGenerator,
        RolesRepository $rolesRepository,
        EncoderFactoryInterface $encoderFactory,
        Environment $twig,
        ValidatorInterface $validator
    )
    {
        $parameters = $request->request->all();


        //User to be registered
        $user = new User();


//        $builder = $factory->createBuilder(FormType::class, $user);
        
//        $builder->add(
//            'username',
//            TextType::class,
//            [
//                'label' => 'FORM.USER.USERNAME',
//                'required' => true
//            ]
//        )
//        ->add(
//            'email',
//            EmailType::class,
//            [
//                'label' => 'FORM.USER.EMAIL',
//                'required' => true
//            ]
//        )
//        ->add(
//            'password',
//            RepeatedPass::class,
//            [
//                'type' => PasswordType::class,
//                'invalid_message' => 'The password fields must match.',
//                'options' => array('attr' => array('class' => 'password-field')),
//                'required' => true,
//                'first_options'  => array('label' => 'FORM.USER.PASSWORD'),
//                'second_options' => array('label' => 'FORM.USER.REPEATPASSWORD'),
//            ]
//        )
//        ->add(
//            'submit',
//            SubmitType::class,
//            [
//                'label' => 'FORM.USER.SUBMIT',
//                'attr' => [
//                    'class' => 'btn-block btn-success'
//                ]
//            ]
//        );
        
//        $form = $builder->getForm();
//        $form->handleRequest($request);
        
//        if ($form->isSubmitted() && $form->isValid()) {
//            $salt = md5($user->getUsername());
//            $user->setSalt($salt);
//
//            $encoder = $encoderFactory->getEncoder(User::class);
//
//            $password = $encoder->encodePassword(
//                $user->getPassword(),
//                $salt
//            );
//
//            $user->setPassword($password);
//
//            $user->addRole($roleRepository->findOneByLabel('ROLE_USER'));
//
//            $manager->persist($user);
//            $manager->flush();
//
//            //To send an email with Swift_Mailer
//            $message = new \Swift_Message();
//            $message->setFrom('ivanmendoza@gmail.com')
//            ->setTo($user->getEmail())
//            ->setSubject('Validate your account.')
//            ->setContentType('text/html')
//            ->setBody(
//                $twig->render(
//                    'Mail/accountCreation.html.twig',
//                    ['user' => $user]
//                )
//            )->addPart(
//                $twig->render(
//                    'Mail/accountCreation.txt.twig',
//                    ['user' => $user]
//                ),
//                'text/plain'
//            );
//
//            $mailer->send($message);
//            $session->getFlashBag()->add('info', 'User successfully registered !');
//
//            return new RedirectResponse($urlGenerator->generate('user_login'));
//        }
        
//        return new Response(
//            $twig->render(
//                '/User/registerUser.html.twig',
//                ['formRegister' => $form->createView()]
//            )
//        );
    }
}