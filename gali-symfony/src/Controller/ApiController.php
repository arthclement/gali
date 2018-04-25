<?php

namespace App\Controller;

use App\Entity\Role;
use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Serializer\Annotation\Groups;


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
                ['role' => 'ROLE_COIFFEUR'],
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
     * @Route("/api/appointments", name="appointments")
     */
    public function getAppointments(
        Request $request,
        UserRepository $userRepository,
        SerializerInterface $serializer
    ) {
        $userID = $request->query->get('id'); // /api/appointments?id=1
        $repoUser = $this->getDoctrine()->getRepository(User::class);
        $user = $repoUser->find($userID);

        $appointments = $user->getAppointments();

        return new JsonResponse(
            $serializer->serialize(
                $appointments,
                'json'
            ),
            200,
            [],
            true
        );
    }

    /**
     * @Route("/api/unavailability", name="unavailability")
     */
    public function getUnavailability(
        Request $request,
        UserRepository $userRepository,
        SerializerInterface $serializer
    )
    {
        $userID = $request->query->get('id');
        $repoUser = $this->getDoctrine()->getRepository(User::class);
        $user = $repoUser->find($userID);

        $unavailability = $user->getUnavailabilities();

        return new JsonResponse(
            $serializer->serialize($unavailability, 'json'),
            200,
            [],
            true
        );
    }

    /**
     * @Route("/api/users", name="users")
     */
    public function getUsers(
        Request $request,
        UserRepository $userRepository,
        SerializerInterface $serializer
    )
    {
        $repoUser = $this->getDoctrine()->getRepository(User::class);
        $userList = $repoUser->findAll();

        return new JsonResponse(
            $serializer->serialize(
                $userList, 
                'json',
                ['groups' => ['userInfo']]
            ),
            200,
            [],
            true
        );
    }
}
