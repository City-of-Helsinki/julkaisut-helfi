<?php

namespace Drupal\facets_range_dropdowns;

/**
 * Interface BoundResultInterface.
 *
 * @package Drupal\facets_range_dropdowns
 */
interface BoundResultInterface {

  /**
   * Gets the bound the result is intended for.
   *
   * @return string
   *   A string identifying the bound the result is intended for. Generally one
   *   of ['lower', 'upper'].
   */
  public function getBound();

}
