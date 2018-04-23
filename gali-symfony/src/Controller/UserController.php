<?php
namespace App\Controller;

use Symfony\Component\Form\Extension\Core\Type\FormType;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\User;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use App\Repository\RoleRepository;
use Symfony\Component\Security\Core\Encoder\EncoderFactoryInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
// use Symfony\Component\Form\Extension\Core\Type\EmailType;
// use Symfony\Component\Form\Extension\Core\Type\PasswordType;
// use Symfony\Component\Form\Extension\Core\Type\SubmitType;
// use Symfony\Component\Form\Extension\Core\Type\TextType;

class UserController
{

    public function registerUser
    (
        Request $request, 
        FormFactoryInterface $factory,
        ObjectManager $manager = null,
        UrlGeneratorInterface $urlGenerator,
        RoleRepository $roleRepository,
        EncoderFactoryInterface $encoderFactory = null
    )
    {
        // user to be created
        $user = new User();
        
        $builder = $factory->createBuilder(FormType::class, $user);
//         $builder->add('username', TextType::class, [
//             'required' => true
//         ]) 
//         ->add('email', EmailType::class, [
//             'required' => true
//         ])
//         ->add('password', PasswordType::class, [
//             'invalid_message' => 'The password fields must match.',
//             'attr' => [
//                 'class' => 'password-field'
//             ]
//         ])
//         ->add('submit', SubmitType::class, [
//             'attr' => [
//                 'class' => 'btn-block btn-success'
//             ]
//         ]);
        
        $form = $builder->getForm();
        $form->handleRequest($request);
        
//         var_dump($request->request->all());
//         die();
        
        if ($form->isSubmitted() && $form->isValid()) {
            var_dump($user);
            die;
            $salt = md5($user->getUsername());
            $user->setSalt($salt);
            
            $encoder = $encoderFactory->getEncoder(User::class);
            
            $password = $encoder->encodePassword(
                $user->getPassword(), 
                $salt
            );
            
            $user->setPassword($password);
            
            $user->addRole($roleRepository->findOneByLabel('ROLE_USER'));
            
            $manager->persist($user);
            $manager->flush();
            
            return new RedirectResponse($urlGenerator->generate('homepage'));
        }
        
        return new JsonResponse([
            'data' => $user
        ]);
    }
}