<?php

namespace Drupal\julkaisut_module;

use Drupal\Core\Routing\RouteMatchInterface;
use Drupal\Core\Url;
use Drupal\easy_breadcrumb\EasyBreadcrumbBuilder;
use Drupal\node\Entity\Node;

class BreadcrumbBuilder extends EasyBreadcrumbBuilder {
  public function build(RouteMatchInterface $route_match) {
    $current_language = \Drupal::languageManager()->getCurrentLanguage()->getId();
    $breadcrumb = parent::build($route_match);

    foreach ($breadcrumb->getLinks() as $link) {
      $url = $link->getUrl();
      // Only act on nodes
      if ($url->getRouteName() !== 'entity.node.canonical') {
        continue;
      }
      $nid = $url->getRouteParameters()['node'];
      $node = Node::load($nid);

      // Only act on child pages
      if ($node->getType() !== 'book' || (int) $node->book['pid'] === 0) {
        continue;
      }

      if (!$node->hasTranslation($current_language) || $node->body->isEmpty()) {
        $link->setUrl(new Url('<none>'));
      }
    }

    return $breadcrumb;
  }
}
