<?php

namespace Drupal\gutenberg_imagefilter\Plugin\Filter;

use Drupal\Component\Utility\Html;
use Drupal\filter\FilterProcessResult;
use Drupal\filter\Plugin\FilterBase;

/**
 * Class GutenbergHeaderFixerFilter.
 *
 * @Filter(
 *   id = "filter_gutenberg_table_header_fixer_filter",
 *   title = @Translation("Table Header Fixer filter"),
 *   description = @Translation("Merges empty cells within a table header if one is empty"),
 *   settings = {
 *   },
 *   type = Drupal\filter\Plugin\FilterInterface::TYPE_MARKUP_LANGUAGE,
 * )
 */
class TableHeaderFixerFilter extends FilterBase {
  /**
   * {@inheritDoc}
   */
  public function process($text, $langcode) {
    return new FilterProcessResult($this->filter($text));
  }

  /**
   * @see https://developer.wordpress.org/reference/functions/wp_filter_content_tags/
   */
  public function filter(string $content): string {
    $dom = Html::load($content);
    $xpath = new \DOMXPath($dom);

    foreach ($xpath->query("//figure[contains(@class, 'wp-block-table')]/table") as $node) {
      /** @var \DOMElement $node */
      $node->setAttribute('data-tablesaw-mode', 'swipe');
      $node->setAttribute('data-tablesaw-minimap', '');
    }

    foreach ($xpath->query("//figure[contains(@class, 'wp-block-table')]/table/thead/tr/th") as $node) {
      /** @var \DOMElement $node */
      $colspan = 1;
      while ($node->nextSibling && empty($node->nextSibling->childNodes->item(0)->nodeValue)) {
        $node->parentNode->removeChild($node->nextSibling);
        $colspan++;
      }
      if ($colspan > 1) {
        $node->setAttribute('colspan', $colspan);
      }
    }

    foreach ($xpath->query("//figure[contains(@class, 'wp-block-table is-style-numeric-with-labels')]/table/thead/tr/th[1]") as $node) {
      /** @var \DOMElement $node */
      $node->setAttribute('data-tablesaw-priority', 'persist');
    }

    return Html::serialize($dom);
  }
}
