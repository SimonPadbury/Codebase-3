/*
Popover (Component)
-------------------
In Codebase, popovers, lightboxes and modals are essentially the same thing.
• The classes are different but they all use the same 'popover' mixins.
• The lightbox and modal JS are cloned from the popover JS, but then their
variable names, function names and class names were changed.
• Using the Reset Overlay utility.
*/

(function ($) {

  'use strict';

  $.fn.cb_popover = function () {
    // called by $('.popover').cb_popover();

    $(this).wrap('<div class="popover__wrap" />');

    function cb_popover_open(e) {

      e.preventDefault();

      /*jshint validthis: true */
      $(this).blur();

      var popover_id = $(this).attr('data-popover');

      $('#' + popover_id).scrollTop(0).parent().addClass('popover__wrap--is-open');
      $('.reset-overlay').addClass('reset-overlay--is-raised-higher reset-overlay--darken');

      $('.reset-overlay--is-raised-higher').on('click', $.fn.cb_reset);

      $('.popover__close').on('click', $.fn.cb_reset);

      popover_id = null;
    }

    $('.popover__open').on('click', cb_popover_open);

  };
}(jQuery));
