<?php

namespace App\Controller;

use Symfony\Component\Form\Extension\Core\Type\FormType;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\User;

class UserController
{
    public function registerUser
    (
        Request $request,
        FormFactoryInterface $factory
    )
    {
        //user to be created
        $user = new User();

        $builder = $factory->createBuilder(FormType::class, $user);

        $form = $builder->getForm();
        $form->handleRequest($request);

        var_dump($request->request->all());
        die;

        if($form->isSubmitted()) {

            $salt = md5($user->getUsername());
            $user->setSalt($salt);

            $encoder = $encoderFactory->getEncoder(User::class);

            $password = $encoder->encodePassword(
                $user->getPassword(),
                $salt
            );

            $user->setPassword($password);


        }


    }

}