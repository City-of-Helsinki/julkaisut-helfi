<?php

namespace Drupal\facets_range_dropdowns\Result;

use Drupal\facets\FacetInterface;
use Drupal\facets\Result\Result;
use Drupal\facets_range_dropdowns\BoundResultInterface;

/**
 * Class BoundResult.
 *
 * @package Drupal\facets_range_dropdowns\Result
 */
class BoundResult extends Result implements BoundResultInterface {

  /**
   * Bound the result is intended for.
   *
   * @var string
   */
  protected $bound;

  /**
   * BoundResult constructor.
   *
   *
   * @param \Drupal\facets\FacetInterface $facet
   *   The facet related to the result.
   * @param mixed $rawValue
   *   The raw value.
   * @param mixed $displayValue
   *   The formatted value.
   * @param int $count
   *   The amount of items.
   * @param string $bound
   *   A string identifying the bound the result is intended for. Generally one
   *   of ['lower', 'upper'].
   */
  public function __construct(
    FacetInterface $facet,
    $rawValue,
    $displayValue,
    $count,
    $bound
  ) {
    parent::__construct($facet, $rawValue, $displayValue, $count);

    $this->bound = $bound;
  }

  /**
   * {@inheritdoc}
   */
  public function getBound() {
    return $this->bound;
  }

  /**
   * Sets the bound the result is intended for.
   *
   * @param string $bound
   *   A string identifying the bound the result is intended for. Generally one
   *   of ['lower', 'upper'].
   */
  public function setBound($bound) {
    $this->bound = $bound;
  }

}
