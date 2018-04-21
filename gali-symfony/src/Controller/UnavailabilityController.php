<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Unavailability;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Bundle\DoctrineBundle\DoctrineBundle;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class UnavailabilityController extends Controller
{
    /**
     * @Route("/unavailability", name="unavailability")
     */
    public function getUnavailability($iduser)
    {
        $repositoryUser = $this->getDoctrine()->getRepository(User::class);
        $repositoryUnavailability = $this->getDoctrine()->getRepository(Unavailability::class);

        $user = $repositoryUser->find($iduser);

        return $this->json(
            [
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/UnavailabilityController.php',
            ]
        );
    }
}
