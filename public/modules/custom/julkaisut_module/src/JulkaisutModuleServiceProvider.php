<?php

namespace Drupal\julkaisut_module;

use Drupal\Core\DependencyInjection\ContainerBuilder;
use Drupal\Core\DependencyInjection\ServiceProviderBase;
use Drupal\Core\DependencyInjection\ServiceProviderInterface;

class JulkaisutModuleServiceProvider extends ServiceProviderBase implements ServiceProviderInterface {

  /**
   * {@inheritdoc}
   */
  public function alter(ContainerBuilder $container) {
    $container->getDefinition('book.outline')
      ->setClass('Drupal\julkaisut_module\ExtendedBookOutline');

    $container->getDefinition('easy_breadcrumb.breadcrumb')
      ->setClass('Drupal\julkaisut_module\BreadcrumbBuilder');
  }
}
