<?php

namespace Drupal\facets_range_dropdowns\Plugin\facets_summary\processor;

use Drupal\Core\Link;
use Drupal\facets_summary\FacetsSummaryInterface;
use Drupal\facets_summary\Processor\BuildProcessorInterface;
use Drupal\facets_summary\Processor\ProcessorPluginBase;

/**
 * Class RangeSummaryProcessor.
 *
 * @package Drupal\facets_range_dropdowns\Plugin\facets_summary\processor
 *
 * @SummaryProcessor(
 *   id = "range_summary",
 *   label = @Translation("Range summary"),
 *   description = @Translation("Shows a summary for range facets."),
 *   stages = {
 *     "build" = 0
 *   }
 * )
 */
class RangeSummaryProcessor extends ProcessorPluginBase implements BuildProcessorInterface {

  /**
   * {@inheritdoc}
   */
  public function build(FacetsSummaryInterface $facetsSummary, array $build, array $facets) {
    /** @var \Drupal\facets\FacetInterface[] $facets */
    foreach ($facets as $facet) {
      if ($facet->getWidgetInstance()->getPluginId() === 'range_dropdowns') {
        $config = $facet->getWidgetInstance()->getConfiguration();
        foreach ($facet->getResults() as $key => $result) {
          if (empty($facet->getActiveItems()[$key])) {
            continue;
          }

          list($lower, $upper) = $facet->getActiveItems()[$key];

          // Add lower bound.
          $text = "{$config['label_lower']} $lower";
          $url = $result->getUrl();
          // For now we let this link reset both lower and upper bound.
          // TODO: Only reset lower bound.
          $query = $url->getOption('query');
          foreach ($query[$facet->getFacetSourceConfig()->getFilterKey()] as $key => $filter) {
            if (strpos($filter, $facet->id()) === 0) {
              unset($query[$facet->getFacetSourceConfig()->getFilterKey()][$key]);
            }
          }
          $url->setOption('query', $query);
          $item = [
            '#theme' => 'facets_result_item__summary',
            '#value' => $text,
            '#show_count' => FALSE,
            '#count' => 0,
            '#is_active' => TRUE,
            '#facet' => $result->getFacet(),
            '#raw_value' => $lower,
          ];
          $item = Link::fromTextAndUrl($item, $url)->toRenderable();
          $item['#wrapper_attributes'] = [
            'class' => [
              'facet-summary-item--facet',
            ],
          ];
          $build['#items'][] = $item;

          // Add upper bound.
          $text = "{$config['label_upper']} $upper";
          $url = $result->getUrl();
          // For now we let this link reset both lower and upper bound.
          // TODO: Only reset upper bound.
          $query = $url->getOption('query');
          foreach ($query[$facet->getFacetSourceConfig()->getFilterKey()] as $key => $filter) {
            if (strpos($filter, $facet->id()) === 0) {
              unset($query[$facet->getFacetSourceConfig()->getFilterKey()][$key]);
            }
          }
          $url->setOption('query', $query);
          $item = [
            '#theme' => 'facets_result_item__summary',
            '#value' => $text,
            '#show_count' => FALSE,
            '#count' => 0,
            '#is_active' => TRUE,
            '#facet' => $result->getFacet(),
            '#raw_value' => $upper,
          ];
          $item = Link::fromTextAndUrl($item, $url)->toRenderable();
          $item['#wrapper_attributes'] = [
            'class' => [
              'facet-summary-item--facet',
            ],
          ];
          $build['#items'][] = $item;
        }
      }
    }

    return $build;
  }

}
