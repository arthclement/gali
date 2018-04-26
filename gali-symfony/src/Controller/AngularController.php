<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class AngularController extends Controller
{
    /**
     * @Route("/angular", name="angular")
     */
    public function index()
    {
        return $this->render('angular/angular.html');
    }
}