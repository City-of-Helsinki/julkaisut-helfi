<?php

namespace Drupal\facets_range_dropdowns\Plugin\facets\widget;

use Drupal\Core\Form\FormStateInterface;
use Drupal\facets\FacetInterface;
use Drupal\facets\Result\ResultInterface;
use Drupal\facets\Widget\WidgetPluginBase;
use Drupal\facets_range_dropdowns\BoundResultInterface;

/**
 * Class RangeDropdownsWidget.
 *
 * @package Drupal\facets_range_dropdowns\Plugin\facets\widget
 *
 * @FacetsWidget(
 *   id = "range_dropdowns",
 *   label = @Translation("Range dropdowns"),
 *   description = @Translation("A widget that shows range dropdowns."),
 * )
 */
class RangeDropdownsWidget extends WidgetPluginBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
        'prefix' => '',
        'suffix' => '',
        'label_lower' => '',
        'label_upper' => '',
        'min_type' => 'search_result',
        'min_value' => 0,
        'max_type' => 'search_result',
        'max_value' => 10,
        'step' => 1,
      ] + parent::defaultConfiguration();
  }

  /**
   * {@inheritdoc}
   */
  public function build(FacetInterface $facet) {
    $config = $this->getConfiguration();

    // Get a generic build for a facet widget.
    $genericBuild = parent::build($facet);

    // Split into a lower bound and an upper bound widget.
    $lowerBoundBuild = $this->buildForBound($genericBuild, 'lower');
    $upperBoundBuild = $this->buildForBound($genericBuild, 'upper');

    // Return both bounds as dropdown widgets.
    return [
      '#type' => 'container',
      'lower' => $this->buildAsDropdown($lowerBoundBuild, "{$facet->id()}-lower", $config['label_lower']),
      'upper' => $this->buildAsDropdown($upperBoundBuild, "{$facet->id()}-upper", $config['label_upper']),
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function buildConfigurationForm(
    array $form,
    FormStateInterface $formState,
    FacetInterface $facet
  ) {
    $config = $this->getConfiguration();
    $form = parent::buildConfigurationForm($form, $formState, $facet);

    $form['prefix'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Value prefix'),
      '#size' => 5,
      '#default_value' => $config['prefix'],
    ];

    $form['suffix'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Value suffix'),
      '#size' => 5,
      '#default_value' => $config['suffix'],
    ];

    $form['label_lower'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Lower bound label'),
      '#size' => 5,
      '#default_value' => $config['label_lower'] ?: $facet->getName(),
    ];

    $form['label_upper'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Upper bound label'),
      '#size' => 5,
      '#default_value' => $config['label_upper'] ?: $facet->getName(),
    ];

    $form['min_type'] = [
      '#type' => 'radios',
      '#options' => [
        'fixed' => $this->t('Fixed value'),
        'search_result' => $this->t('Based on search result'),
      ],
      '#title' => $this->t('Minimum value type'),
      '#default_value' => $config['min_type'],
    ];

    $form['min_value'] = [
      '#type' => 'number',
      '#title' => $this->t('Minimum value'),
      '#default_value' => $config['min_value'],
      '#size' => 10,
      '#states' => [
        'visible' => [
          'input[name="widget_config[min_type]"]' => ['value' => 'fixed'],
        ],
      ],
    ];

    $form['max_type'] = [
      '#type' => 'radios',
      '#options' => [
        'fixed' => $this->t('Fixed value'),
        'search_result' => $this->t('Based on search result'),
      ],
      '#title' => $this->t('Maximum value type'),
      '#default_value' => $config['max_type'],
    ];

    $form['max_value'] = [
      '#type' => 'number',
      '#title' => $this->t('Maximum value'),
      '#default_value' => $config['max_value'],
      '#size' => 5,
      '#states' => [
        'visible' => [
          'input[name="widget_config[max_type]"]' => ['value' => 'fixed'],
        ],
      ],
    ];

    $form['step'] = [
      '#type' => 'number',
      '#step' => 0.001,
      '#title' => $this->t('slider step'),
      '#default_value' => $config['step'],
      '#size' => 2,
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function isPropertyRequired($name, $type) {
    // Require the Range processor for this widget.
    if ($type === 'processors' && $name === 'range') {
      return TRUE;
    }

    // Ensure that only one result can be selected at a time for the facet
    // using this widget.
    if ($type === 'settings' && $name === 'show_only_one_result') {
      return TRUE;
    }

    return FALSE;
  }

  /**
   * {@inheritdoc}
   */
  public function getQueryType() {
    return 'range';
  }

  /**
   * {@inheritdoc}
   */
  protected function buildListItems(FacetInterface $facet, ResultInterface $result) {
    $build = parent::buildListItems($facet, $result);

    if ($result instanceof BoundResultInterface) {
      $build['#bound'] = $result->getBound();
    }

    return $build;
  }

  /**
   * Alters a renderable array for a facet widget for a given bound.
   *
   * @param array $build
   *   Renderable array for a facet widget.
   * @param string $bound
   *   Bound to alter the build for.
   *
   * @return array
   *   Renderable array for a facet widget for the given bound.
   */
  protected function buildForBound(array $build, $bound) {
    // Remove items for other bounds.
    foreach ($build['#items'] as $key => $item) {
      if (isset($item['#bound']) && $item['#bound'] !== $bound) {
        unset($build['#items'][$key]);
      }
    }

    // Update the data attributes for the element.
    $build['#attributes']['data-drupal-facet-id'] .= "-$bound";

    return $build;
  }

  /**
   * Alters a renderable array for a facet widget to render it as a dropdown.
   *
   * @param array $build
   *   Renderable array for a facet widget.
   * @param string $facetId
   *   Facet ID.
   * @param string $defaultOptionLabel
   *   Default option label for the dropdown.
   *
   * @return array
   *   Renderable array for a facet dropdown widget.
   */
  protected function buildAsDropdown(array $build, $facetId, $defaultOptionLabel) {
    // Attach assets that build the widget as a dropdown.
    $build['#attributes']['class'][] = 'js-facets-dropdown-links';
    $build['#attached']['drupalSettings']['facets']['dropdown_widget'][$facetId]['facet-default-option-label']
      = $defaultOptionLabel;
    $build['#attached']['library'][] = 'facets/drupal.facets.dropdown-widget';
    $build['#attached']['library'][] = 'facets/drupal.facets.general';

    return $build;
  }

}
