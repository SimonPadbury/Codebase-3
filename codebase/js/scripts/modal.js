/*
Modal (Component)
-------------------
In Codebase, popovers, lightboxes and modals are essentially the same thing.
• The classes are different but they all use the same 'popover' mixins.
• The lightbox and modal JS are cloned from the popover JS, but then their
variable names, function names and class names were changed.
• Using the Reset Overlay utility.
*/

(function ($) {

  'use strict';

  $.fn.cb_modal = function () {
    // called by $('.modal').cb_modal();

    $(this).wrap('<div class="modal__wrap" />');

    function cb_modal_open(e) {

      e.preventDefault();

      /*jshint validthis: true */
      $(this).blur();

      var modal_id = $(this).attr('data-modal');

      $('#' + modal_id).scrollTop(0).parent().addClass('modal__wrap--is-open');
      $('.reset-overlay').addClass('reset-overlay--is-raised-higher reset-overlay--darken');

      $('.reset-overlay--is-raised-higher').on('click', $.fn.cb_reset);

      $('.modal__close').on('click', $.fn.cb_reset);

      modal_id = null;
    }

    $('.modal__open').on('click', cb_modal_open);

  };
}(jQuery));
