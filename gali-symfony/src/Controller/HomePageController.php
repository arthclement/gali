<?php
namespace App\Controller;

use Twig\Environment;
use Symfony\Component\HttpFoundation\Response;

class HomePageController
{
    public function getHomePage(Environment $twig)
    {
        return new Response(
            $twig->render('/homepage/homepage.html')
        );
    }
}

