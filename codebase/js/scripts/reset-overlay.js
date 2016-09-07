// RESET OVERLAY (Utilities)
// =========================
// • Used by modals, dropdowns, off-canvas sidebar and anything else that
// needs to be dismissed by "clicking outside" the open/active element.
// • Put everything that needs `.reset-overlay` activity in this function.

// The reset

(function ($) {
  'use strict';
  $.fn.cb_reset = function () {

    $('.off-canvas-navicon, .off-canvas--right, .off-canvas--left').removeClass('off-canvas--is-open');

    $('.navbar').removeClass('navbar--is-open');
    if ($('.navbar__navicon').is(':visible')) {
      $('.navbar__content').slideUp();
    }
    $('.dropdown__toggle').removeClass('dropdown__toggle--is-toggled');
    $('.dropdown__content').removeClass('dropdown__content--is-revealed');

    $('.popover__wrap').removeClass('popover__wrap--is-open');

    $('.reset-overlay').removeClass('reset-overlay--darken');

    setTimeout(function () {
      $('.reset-overlay')
        .removeClass('reset-overlay--is-raised')
        .removeClass('reset-overlay--is-raised-higher');
    }, 300);

  };
}(jQuery));

// The reset-overlay

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
