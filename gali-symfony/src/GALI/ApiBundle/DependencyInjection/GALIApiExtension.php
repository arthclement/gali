<?php
namespace GALI\ApiBundle\DependencyInjection;

use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;
use Symfony\Component\Config\FileLocator;

class GALIApiExtension extends Extension
{
    public function load(array $configs, ContainerBuilder $container)
    {
        $loader = new YamlFileLoader(
            $container, 
            new FileLocator(__DIR__.'/../Resources/config')
        );
        
        $loader->load('services.yaml');
        
        $configuration = new Configuration();
        $config = $this->processConfiguration($configuration, $configs);
        
        $container->setParameter('gali_api_groups', $config['groups']);
    }
}

