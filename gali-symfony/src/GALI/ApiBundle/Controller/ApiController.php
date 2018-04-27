<?php
namespace GALI\ApiBundle\Controller;

use App\Entity\Appointment;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

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









