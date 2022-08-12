(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.julkaisutTheme = {
  attach(context, settings) {
    var elements = document.getElementsByClassName('display-none');
    document.querySelector('#load_more_button').addEventListener('click', function () {
      for (let i = 0; i < drupalSettings.julkaisut.rows_per_page; i++) {
        $(elements[i]).removeClass('display-none');
      }

      if (elements.length == 0) {
        $('#load_more_ul').addClass('display-none');
      }
    });
    if (elements.length == 0) {
      $('#load_more_ul').addClass('display-none');
    }

  },
}

})(jQuery, Drupal, drupalSettings);
