/*
Off-Canvas Sidebar (Layout)
---------------------------
• Using the Reset Overlay utility.
*/

(function ($) {
  'use strict';
  $.fn.cb_off_canvas_sidebar = function () {
    // called by $('.off-canvas-navicon').cb_off_canvas_sidebar();

    $('[class*="xs--off-canvas"]').prev().addClass('show--xs-only');
    $('[class*="sm--off-canvas"]').prev().addClass('show--sm-down');
    $('[class*="md--off-canvas"]').prev().addClass('show--md-down');
    $('[class*="lg--off-canvas"]').prev().addClass('show--lg-down');

    function cb_off_canvas_open() {
      $('body').addClass('off-canvas--is-open');
      $('.reset-overlay').addClass('reset-overlay--is-raised');
      $('.xs--off-canvas').scrollTop(0);
      $('.sm--off-canvas').scrollTop(0);
      $('.md--off-canvas').scrollTop(0);
      $('.lg--off-canvas').scrollTop(0);

      $('.reset-overlay--is-raised').on('click', $.fn.cb_reset);
      $('.reset-overlay--is-raised').on('touchstart', $.fn.cb_reset);
    }

    function cb_off_canvas_navicon(e) {
      if (!$('body').hasClass('off-canvas--is-open')) {
        cb_off_canvas_open();
      } else {
        $.fn.cb_reset();
      }
      e.preventDefault();
    }
    $('.off-canvas-navicon').on('click', cb_off_canvas_navicon);
    $('.off-canvas-navicon').on('touchstart', cb_off_canvas_navicon);


  };
}(jQuery));
