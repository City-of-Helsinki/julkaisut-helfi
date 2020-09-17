<?php

namespace Drupal\facets_range_dropdowns\Plugin\facets\processor;

use Drupal\facets\FacetInterface;
use Drupal\facets\Processor\BuildProcessorInterface;
use Drupal\facets\Processor\PostQueryProcessorInterface;
use Drupal\facets\Processor\PreQueryProcessorInterface;
use Drupal\facets\Processor\ProcessorPluginBase;
use Drupal\facets_range_dropdowns\BoundResultInterface;
use Drupal\facets_range_dropdowns\Result\BoundResult;

/**
 * Class RangeProcessor.
 *
 * @package Drupal\facets_range_dropdowns\Plugin\facets\processor
 *
 * @FacetsProcessor(
 *   id = "range",
 *   label = @Translation("Range"),
 *   description = @Translation("Add range results for all the steps between min and max."),
 *   stages = {
 *     "pre_query" = 60,
 *     "post_query" = 60,
 *     "build" = 20
 *   }
 * )
 */
class RangeProcessor extends ProcessorPluginBase implements PreQueryProcessorInterface, PostQueryProcessorInterface, BuildProcessorInterface {

  /**
   * {@inheritdoc}
   */
  public function preQuery(FacetInterface $facet) {
    $activeItems = $facet->getActiveItems();

    array_walk($activeItems, function (&$item) {
      if (preg_match('/\(min:((?:-)?[\d\.]+),max:((?:-)?[\d\.]+)\)/i', $item, $matches)) {
        $item = [$matches[1], $matches[2]];
      }
      else {
        $item = NULL;
      }
    });
    $facet->setActiveItems($activeItems);
  }

  /**
   * {@inheritdoc}
   */
  public function postQuery(FacetInterface $facet) {
    $config = $facet->getWidgetInstance()->getConfiguration();

    // Get an array with the sorted results.
    $realResults = $this->getSortedResults($facet->getResults());

    // In case the view is set to now display results until filtered.
    if (empty($realResults)) {
      return;
    }

    // Determine step size and min and max.
    $step = $config['step'];
    list($min, $max) = $this->getMinMax($facet, $realResults);

    // Create an array of all results between min and max by the step from the
    // configuration.
    // TODO: Fix the count for added steps considering this is a range widget.
    $facetResults = [];
    $lowerCount = $this->getTotalCount($facet->getResults());
    $upperCount = 0;
    for ($i = $min; $i < $max + $step; $i += $step) {
      if ($i > $max) {
        $i = $max;
      }

      if (isset($realResults['f_' . $i])) {
        // Update the count for the upper bound if we have a real result.
        $upperCount += $realResults['f_' . $i]['count'];
      }

      $facetResults[] = new BoundResult($facet, (float) $i, (float) $i, $lowerCount, 'lower');
      $facetResults[] = new BoundResult($facet, (float) $i, (float) $i, $upperCount, 'upper');

      if (isset($realResults['f_' . $i])) {
        // Update the count for the lower bound if we have a real result.
        $lowerCount -= $realResults['f_' . $i]['count'];
      }
    }

    // Overwrite the current facet values with the generated results.
    $facet->setResults($facetResults);
  }

  /**
   * {@inheritdoc}
   */
  public function build(FacetInterface $facet, array $results) {
    // Determine the active filters by inspecting the URL processor.
    $activeFilters = $facet->getProcessors()['url_processor_handler']
      ->getProcessor()
      ->getActiveFilters();

    if (isset($activeFilters[''])) {
      unset($activeFilters['']);
    }

    // In case the view is set to not display results until filtered.
    if (empty($results)) {
      return $results;
    }

    // Determine min and max.
    list($min, $max) = $this->getMinMax($facet, $this->getSortedResults($results));

    /** @var \Drupal\facets\Result\ResultInterface[] $results */
    foreach ($results as &$result) {
      $newActiveFilters = $activeFilters;
      unset($newActiveFilters[$facet->id()]);

      // Default min and max values.
      $minValue = $min;
      $maxValue = $max;

      if ($result instanceof BoundResultInterface) {
        switch ($result->getBound()) {
          case 'lower':
            // For a result intended for the lower bound the min is the actual
            // value.
            $minValue = $result->getRawValue();
            break;

          case 'upper':
            // For a result intended for the upper bound the max is the actual
            // value.
            $maxValue = $result->getRawValue();
            break;

          default:
            break;
        }
      }

      $newActiveFilters[$facet->id()][] = "(min:$minValue,max:$maxValue)";
      $url = \Drupal::service('facets.utility.url_generator')->getUrl($newActiveFilters, FALSE);
      $result->setUrl($url);
    }

    return $results;
  }

  /**
   * Gets the results from a facet as a sorted array.
   *
   * @param \Drupal\facets\Result\ResultInterface[] $results
   *   Facet.
   *
   * @return array
   *   Array with sorted results.
   */
  protected function getSortedResults(array $results) {
    $realResults = [];

    // Determine the actual results.
    foreach ($results as $result) {
      $realResults['f_' . (float) $result->getRawValue()] = [
        'value' => (float) $result->getRawValue(),
        'count' => (int) $result->getCount(),
      ];
    }

    // Sort the results by value.
    uasort($realResults, function ($a, $b) {
      if ($a['value'] === $b['value']) {
        return 0;
      }

      return $a['value'] < $b['value'] ? -1 : 1;
    });

    return $realResults;
  }

  /**
   * Gets the min and max values based on the facet configuration and results.
   *
   * @param \Drupal\facets\FacetInterface $facet
   *   Facet.
   * @param array $results
   *   Results.
   *
   * @return array
   *   Indexed array with min and max values respectively.
   */
  protected function getMinMax(FacetInterface $facet, array $results) {
    $config = $facet->getWidgetInstance()->getConfiguration();

    $step = $config['step'];
    if ($config['min_type'] === 'fixed') {
      $min = $config['min_value'];
      $max = $config['max_value'];
    }
    else {
      $min = reset($results)['value'];
      $max = end($results)['value'];
      // If max is not divisible by step we should add the remainder to max to
      // make sure that we do not lose any possible values.
      if ($max % $step !== 0) {
        $max = $max + ($step - $max % $step);
      }
    }

    return [$min, $max];
  }

  /**
   * Returns the total number of search results for the given facet results.
   *
   * @param \Drupal\facets\Result\ResultInterface[] $results
   *   Facet results.
   *
   * @return int
   *   Total number of search results.
   */
  protected function getTotalCount(array $results) {
    $count = 0;
    foreach ($results as $result) {
      $count += $result->getCount();
    }

    return $count;
  }

}
