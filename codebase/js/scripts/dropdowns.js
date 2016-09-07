// DROPDOWNS (Utilities)
// =====================
// • Uses the Reset Overlay utility.
// • Can be applied to `<button>` or or any block element.
// • Also used for menubar dropdowns.

(function ($) {
  'use strict';
  $.fn.cb_dropdown_toggle = function () {
    // called by $('.dropdown__toggle').cb_dropdown_toggle()

    function cb_dropdown(e) {

      if ($('.reset-overlay').hasClass('reset-overlay--is-raised')) {

        $.fn.cb_reset();
        
      } else {
        
        if ($('.dropdown__toggle').hasClass('dropdown__toggle--is-toggled')) {
          
          $.fn.cb_reset();
          
        } else {

          e.preventDefault();

          /* jshint validthis: true */
          $(this)
            .addClass('dropdown__toggle--is-toggled')
            .next('.dropdown__content')
            .addClass('dropdown__content--is-revealed');
          $('.reset-overlay').addClass('reset-overlay--is-raised');

          $('.reset-overlay--is-raised').on('click', $.fn.cb_reset);
          $('.reset-overlay--is-raised').on('touchstart', $.fn.cb_reset);

          $('.dropdown__content').click(function (e) {
            e.stopPropagation();
          });

          $('.dropdown__content').touchstart(function (e) {
            e.stopPropagation();
          });

        }       
      }
    }

    $(this).on('click', cb_dropdown);
    $(this).on('touchstart', cb_dropdown);

  };
}(jQuery));
