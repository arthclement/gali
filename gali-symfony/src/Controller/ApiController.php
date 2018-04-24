<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Roles;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class ApiController extends Controller
{
    /**
     * @Route("/api/professionals", name="professionals")
     */
    public function getProfessionals()
    {
        $repository = $this->getDoctrine()->getRepository(User::class);

        $professionals = $repository->findBy(
            [
                ['roles' => 'ROLE_COIFFEUR'],
                ['firstname' => 'ASC']
            ]
        );

        return new JsonResponse(
            \json_encode($professionals),
            200,
            [],
            true
        );
    }


    /**
     * @Route("/api/appointment", name="appointment")
     */
    public function getAppointment(Request $request)
    {
        $userID = $request->query->get('id');
        $repoUser = $this->getDoctrine()->getRepository(User::class);
        $user = $repoUser->find($userID);

        return new JsonResponse(

        );
    }
}
