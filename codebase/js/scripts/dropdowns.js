/*
Dropdown (Utility)
------------------
• Uses the Reset Overlay utility.
• Can be applied to `<button>` or or any block element.
• Also used for menubar dropdowns.
*/

(function ($) {
  'use strict';
  $.fn.cb_dropdown_toggle = function () {
    // called by $('.dropdown__toggle').cb_dropdown_toggle()

    $(this).each(function () {
      var icon = $(this).data('icon');

      $(this).append('<i class="' + icon + '"></i>');
    });

    function cb_dropdown(e) {

      if (!$('.reset-overlay').hasClass('reset-overlay--is-raised')) {
        e.preventDefault();
      }
      /*jshint validthis: true */
      var dropdownContent = $(this).data('dropdown-content');

      if (!$('#' + dropdownContent).hasClass('dropdown__content--is-revealed')) {

        $('#' + dropdownContent).addClass('dropdown__toggle--is-toggled');
        $('#' + dropdownContent).addClass('dropdown__content--is-revealed');
        $('.reset-overlay').addClass('reset-overlay--is-raised');

        $('.reset-overlay--is-raised').on('click', $.fn.cb_reset);
        $('.reset-overlay--is-raised').on('touchstart', $.fn.cb_reset);

        $('.dropdown__content').click(function (e) {
          e.stopPropagation();
        });

        $('.dropdown__content').touchstart(function (e) {
          e.stopPropagation();
        });

      } else {
        $.fn.cb_reset();
      }

    }

    $(this).on('click', cb_dropdown);
    $(this).on('touchstart', cb_dropdown);

  };
}(jQuery));
