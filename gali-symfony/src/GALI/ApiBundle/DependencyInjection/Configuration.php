<?php
namespace GALI\ApiBundle\DependencyInjection;

use Symfony\Component\Config\Definition\ConfigurationInterface;
use Symfony\Component\Config\Definition\Builder\TreeBuilder;

class Configuration implements ConfigurationInterface
{
    public function getConfigTreeBuilder()
    {
        $treeBuilder = new TreeBuilder();
        
        $root = $treeBuilder->root('gali_api');
        $root->children()
                ->arrayNode('groups')
                    ->scalarPrototype()
                    ->cannotBeEmpty()
                    ->isRequired()
                    ->defaultValue(['appointment.id', 'appointment.date', 'appointment.time', 'appointment.description'])
                ->end()
            ->end();
        
        return $treeBuilder;
    }
}

