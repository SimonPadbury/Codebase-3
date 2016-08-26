/*
Lightbox (Component)
-------------------
In Codebase, popovers, lightboxes and modals are essentially the same thing.
• The classes are different but they all use the same 'popover' mixins.
• The lightbox and modal JS are cloned from the popover JS, but then their
variable names, function names and class names were changed.
• Using the Reset Overlay utility.
*/

(function ($) {

  'use strict';

  $.fn.cb_lightbox = function () {
    // called by $('.lightbox').cb_lightbox();

    $(this).wrap('<div class="lightbox__wrap" />');

    function cb_lightbox_open(e) {

      e.preventDefault();

      /*jshint validthis: true */
      $(this).blur();

      var lightbox_id = $(this).attr('data-lightbox');

      $('#' + lightbox_id).scrollTop(0).parent().addClass('lightbox__wrap--is-open');
      $('.reset-overlay').addClass('reset-overlay--is-raised-higher reset-overlay--darken');

      $('.reset-overlay--is-raised-higher').on('click', $.fn.cb_reset);

      $('.lightbox__close').on('click', $.fn.cb_reset);

      lightbox_id = null;
    }

    $('.lightbox__open').on('click', cb_lightbox_open);

  };
}(jQuery));
