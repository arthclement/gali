<?php
namespace GALI\ApiBundle\Controller;

use App\Entity\Appointment;
use App\Entity\Role;
use App\Entity\User;
use App\Repository\AppointmentRepository;
use App\Repository\RoleRepository;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;


class ApiController extends Controller
{
    public function getAppointments()
    {
        $repo = $this->getDoctrine()->getRepository(Appointment::class);
        $appointments = $repo->findAll();

        return new JsonResponse(
            $this->get('serializer')->serialize(
                $appointments,
                'json',
                ['groups' => $this->getParameter('gali_api_groups')]
            ),
            200,
            [],
            true
        );
    }
    /**
     * @Route("/api/professionals", name="professionals")
     */
    public function getProfessionals(
        UserRepository $repoUser,
        RoleRepository $repoRole,
        SerializerInterface $serializer
    ) {
        $repoUser = $this->getDoctrine()->getRepository(User::class);
        $repoRole = $this->getDoctrine()->getRepository(Role::class);

        $role = $repoRole->findOneBy(['role' => 'ROLE_COIFFEUR']);

        $professionals = $repoUser->findByRole($role);

        return new JsonResponse(
            $serializer->serialize(
                $professionals,
                'json',
                ['groups' => ['userInfo']]
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
    ) {
        $userID = $request->query->get('id');
        $repoUser = $this->getDoctrine()->getRepository(User::class);
        $user = $repoUser->find($userID);

        $unavailability = $user->getUnavailabilities();

        return new JsonResponse(
            $serializer->serialize(
                $unavailability,
                'json'
            ),
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
    ) {
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

    /**
     * @Route("/api/lastuser", name="lastuser")
     */
    public function getLastUser(
        Request $request,
        SerializerInterface $serializer
    ) {
        $lastUser = $this->getUser();

        return new JsonResponse(
            $serializer->serialize(
                $lastUser,
                'json',
                ['groups' => ['userInfo']]
            ),
            200,
            [],
            true
        );
    }
}

    
//    public function postProduct(Request $request)
//    {
//        $product = new Product();
//        $form = $this->createForm(ProductForm::class, $product);
//
//        $form->submit($request->request->all());
//        if ($form->isValid()) {
//            $manager = $this->getDoctrine()->getManager();
//            $manager->persist($product);
//            $manager->flush();
//
//            return new JsonResponse(
//                $this->get('serializer')->serialize(
//                    $product,
//                    'json',
//                    ['groups' => $this->getParameter('pm_api_groups')]
//                    ),
//                200,
//                [],
//                true
//            );
//        }
//
//        return $this->json(['message' => 'nok']);
//    }
}









