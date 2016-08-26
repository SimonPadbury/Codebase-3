/*
Reset Overlay (Utility)
-----------------------
• Used by modals, dropdowns, off-canvas sidebar and anything else that needs
to be dismissed by "clicking outside" the open/active element.
• Put everything that needs `.reset-overlay` activity in this function.
*/

// Reset
// -----

(function ($) {
  'use strict';
  $.fn.cb_reset = function () {

    $('body').removeClass('off-canvas--is-open');
    $('.reset-overlay')
      .removeClass('reset-overlay--darken')
      .removeClass('reset-overlay--is-raised')
      .removeClass('reset-overlay--is-raised-higher');
    $('.navbar').removeClass('navbar--is-open');
    if ($('.navbar__navicon').is(':visible')) {
      $('.navbar__content').slideUp();
    }
    $('.dropdown__toggle').removeClass('dropdown__toggle--is-toggled');
    $('.dropdown__content').removeClass('dropdown__content--is-revealed');
    $('.popover__wrap').removeClass('popover__wrap--is-open');
    $('.lightbox__wrap').removeClass('lightbox__wrap--is-open');
    $('.modal__wrap').removeClass('modal__wrap--is-open');
  };
}(jQuery));

// Reset Overlay
// -------------

(function ($) {

  'use strict';

  $.fn.cb_reset_overlay = function () {
    // called by $('body').cb_reset_overlay();

    $(this).prepend('<span class="reset-overlay"></span>');

    $(window).resize($.fn.cb_debounce(function () {
      $.fn.cb_reset();
    }, 250));

  };
}(jQuery));
