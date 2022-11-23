/**
 * @file
 * search Accordion functionality.
 */

(function ($, Drupal) {
  'use strict';
  Drupal.behaviors.searchAccordion = {
    attach: function (context, settings) {

      // Create accordion functionality if the required elements exist is available.
      var $searchAccordion = $('.search-accordion');
      if ($searchAccordion.length > 0) {
        // Create simple accordion mechanism for each tab.
        $searchAccordion.each(function () {
          var $accordion = $(this);
          if ($accordion.hasClass('styled')) {
            return;
          }
          console.log($searchAccordion.is( ':first-child' ))

          // The first one is the correct one.
          if (!$searchAccordion.is( ':first-child' )) {
            $accordion.children('dt:first').addClass('active');
            $accordion.children('dd:first').addClass('active');
            $accordion.children('dd:first').css('display', 'block');
          }

          // Turn the accordion tabs to links so that the content is accessible & can be traversed using keyboard.
          $accordion.children('dt').each(function () {
            var $tab = $(this);
            var tabText = $tab.text().trim();
            var toggleClass = $tab.hasClass('active') ? ' active' : '';
            $tab.html('<a class="search-accordion-toggler" href="#"><span class="search-accordion-toggle' + toggleClass + '"></span>' + tabText + '</a>');
          });

          // Wrap the accordion in a div element so that quick edit function shows the source correctly.
          $accordion.addClass('styled').removeClass('search-accordion').wrap('<div class="search-accordion-container"></div>');

          // Trigger an searchAccordionAttached event to let other frameworks know that the accordion has been attached.
          $accordion.trigger('searchAccordionAttached');
        });

        // Add click event to body once because quick edits & ajax calls might reset the HTML.
        $('body').once('searchAccordionToggleEvent').on('click', '.search-accordion-toggler', function (e) {
          var $t = $(this).parent();
          var $parent = $t.parent();

          // Clicking on open element, close it.
          if ($t.hasClass('active')) {
            $t.removeClass('active');
            $t.next().slideUp();
          }
          else {
            // Remove active classes.
            $parent.children('dt.active').removeClass('active').children('a').removeClass('active');
            $parent.children('dd.active').slideUp(function () {
              $(this).removeClass('active');
            });

            // Show the selected tab.
            $t.addClass('active');
            $t.next().slideDown(300).addClass('active');
          }

          // Don't add hash to url.
          e.preventDefault();
        });
      }
    }
  };
})(jQuery, Drupal);
