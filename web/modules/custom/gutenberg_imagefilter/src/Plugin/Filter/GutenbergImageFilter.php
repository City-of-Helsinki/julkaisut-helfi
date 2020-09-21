<?php

namespace Drupal\gutenberg_imagefilter\Plugin\Filter;

use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\file\Entity\File;
use Drupal\file_mdm\FileMetadataManagerInterface;
use Drupal\filter\FilterProcessResult;
use Drupal\filter\Plugin\FilterBase;
use Drupal\Core\Entity\EntityStorageInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Render\RendererInterface;
use Drupal\media\Entity\Media;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Class GutenbergImageFilter.
 *
 * @Filter(
 *   id = "filter_gutenberg_image_filter",
 *   title = @Translation("Gutenberg Image filter"),
 *   description = @Translation("Automatically adds sizes, srcset, width, height and loading attributes to images"),
 *   settings = {
 *   "responsive_image_style":null
 *   },
 *   type = Drupal\filter\Plugin\FilterInterface::TYPE_MARKUP_LANGUAGE,
 * )
 */
class GutenbergImageFilter extends FilterBase implements ContainerFactoryPluginInterface {
  /**
   * @var \Drupal\file_mdm\FileMetadataManagerInterface
   */
  protected $fmdm;

  /**
   * @var \Drupal\Core\Entity\EntityStorageInterface
   */
  protected $responsiveImageStyleStorage;

  /**
   * @var \Drupal\Core\Render\RendererInterface
   */
  protected $renderer;

  /**
   * {@inheritdoc}
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, EntityStorageInterface $responsive_image_style_storage, FileMetadataManagerInterface $fmdm, RendererInterface $renderer) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->responsiveImageStyleStorage = $responsive_image_style_storage;
    $this->fmdm = $fmdm;
    $this->renderer = $renderer;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('entity_type.manager')->getStorage('responsive_image_style'),
      $container->get('file_metadata_manager'),
      $container->get('renderer'),
    );
  }

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
    if (strpos($content, '<img') === false) {
      return $content;
    }

    if (!preg_match_all('/<img\s[^>]+>/', $content, $matches)) {
      return $content;
    }

    // List of the unique `img` tags found in $content.
    $images = [];

    foreach ($matches[0] as $image) {
      if (preg_match('/wp-image-([0-9]+)/i', $image, $class_id)) {
        $attachment_id = abs(intval($class_id[1]));

        if ($attachment_id) {
          // If exactly the same image tag is used more than once, overwrite it.
          // All identical tags will be replaced later with 'str_replace()'.
          $images[$image] = $attachment_id;
          continue;
        }
      }

      $images[$image] = 0;
    }

    foreach ($images as $image => $attachment_id) {
      $filtered_image = $this->replaceImageTag($image, $attachment_id);

      if ($filtered_image !== $image) {
        $content = str_replace($image, $filtered_image, $content);
      }
    }

    return $content;
  }

  /**
   * @see https://developer.wordpress.org/reference/functions/wp_img_tag_add_srcset_and_sizes_attr/
   */
  public function replaceImageTag(string $image, int $fid): string {
    $file = File::load($fid);
    if (!$file) {
      return $image;
    }

    $width = preg_match('/ width="([0-9]+)"/', $image, $match_width) ? (int) $match_width[1] : 0;
    $height = preg_match('/ height="([0-9]+)"/', $image, $match_height) ? (int) $match_height[1] : 0;

    if (!$width || !$height) {
      $metadata = $this->fmdm->uri($file->getFileUri());
      $width = $metadata->getMetadata('getimagesize', 0);
      $height = $metadata->getMetadata('getimagesize', 1);
    }

    $media_ids = \Drupal::entityQuery('media')
      ->condition('field_media_image.target_id', $fid)
      ->execute();

    if (empty($media_ids)) {
      return $image;
    }

    $media = Media::load(reset($media_ids));

    // ImageItem like object
    $item = (object) [
      'title' => $media->field_media_image->title,
      'alt' => $media->field_media_image->alt,
      'entity' => $file,
      'width' => $width,
      'height' => $height,
    ];

    $element = [
      '#theme' => 'responsive_image_formatter',
      '#item' => $item,
      '#item_attributes' => [
        'loading' => 'lazy',
        'width' => $width,
        'height' => $height,
      ],
      '#responsive_image_style_id' => $this->settings['responsive_image_style'],
      // '#url' => $file->createFileUrl(),
    ];

    try {
      return $this->renderer->renderRoot($element);
    }
    // In case something goes wrong (eg using stage file proxy, just fallback)
    catch (\LogicException $e) {
      return $image;
    }
  }

  /**
   * Define settings for text filter.
   */
  public function settingsForm(array $form, FormStateInterface $form_state) {
    $responsive_image_options = [];
    $responsive_image_styles = $this->responsiveImageStyleStorage->loadMultiple();
    if ($responsive_image_styles && !empty($responsive_image_styles)) {
      foreach ($responsive_image_styles as $machine_name => $responsive_image_style) {
        if ($responsive_image_style->hasImageStyleMappings()) {
          $responsive_image_options[$machine_name] = $responsive_image_style->label();
        }
      }
    }

    $form['responsive_image_style'] = [
      '#type' => 'select',
      '#title' => $this->t('Responsive Image Style'),
      '#default_value' => $this->settings['responsive_image_style'] ?? '',
      '#required' => TRUE,
      '#options' => $responsive_image_options,
    ];

    return $form;
  }
}
