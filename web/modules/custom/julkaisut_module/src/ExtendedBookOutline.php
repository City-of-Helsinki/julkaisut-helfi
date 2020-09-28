<?php

namespace Drupal\julkaisut_module;

use Drupal\book\BookOutline;
use Drupal\node\Entity\Node;

/**
 * Extend BookOutline to skip links to books which are untranslated or without
 * content.
 */
class ExtendedBookOutline extends BookOutline {
  /**
   * {@inheritDoc}
   */
  public function nextLink(array $book_link) {
    do {
      $link = parent::nextLink($book_link);
      if (!empty($link['nid'])) {
        $book_link = Node::load($link['nid'])->book;
      }
    } while ($link && !$this->is_valid_book($link));

    return $link;
  }

  /**
   * {@inheritDoc}
   */
  public function prevLink(array $book_link) {
    do {
      $link = parent::prevLink($book_link);
      if (!empty($link['nid'])) {
        $book_link = Node::load($link['nid'])->book;
      }
    } while ($link && !$this->is_valid_book($link));

    return $link;
  }

  /**
   * Check if a book page is valid and should be reached.
   */
  protected function is_valid_book(array $book_link) {
    if (empty($book_link['nid'])) {
      return FALSE;
    }

    $current_language = \Drupal::languageManager()->getCurrentLanguage()->getId();
    $node = Node::load($book_link['nid']);

    if (!$node->hasTranslation($current_language)) {
      return FALSE;
    }

    if ($node->body->isEmpty()) {
      return FALSE;
    }

    return TRUE;
  }
}
