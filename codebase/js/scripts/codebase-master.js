// CODEBASE v.1.2
// ==============
// Notes:
// • the `` prefix identifies a Codebase JS module file, that is `@codekit-prepend`ed in here.
// • the `cb_` prefix identifies a Codebase function.

// @codekit-prepend "debounce.js", "reset-overlay.js", "dropdowns.js", "off-canvas-sidebar.js", "navbar.js", "popover.js", "lightbox.js", "modal.js", "slideshow.js", "tab-systems.js", "responsive-table.js", "pagination.js";

/*
********************************************************************************
    THE CODEBASE MASTER PLUGIN
********************************************************************************
*/

(function ($) {

  'use strict';

  $.fn.codebase = function () {
    // called by $(document).codebase();

    $(document).ready(function () {

      // Reset Overlay (Utility)
      $('body').cb_reset_overlay();

      // Dropdown (Utility)
      $('.dropdown__toggle').cb_dropdown_toggle();

      // Off-Canvas Sidebar (Layout)
      $('.off-canvas-navicon').cb_off_canvas_sidebar();

      // Navbar (Component)
      $('.navbar').cb_navbar();

      // Popover (Component)
      $('.popover').cb_popover();

      // Lightbox (Component)
      $('.lightbox').cb_lightbox();

      // Modal (Component)
      $('.modal').cb_modal();

      // Slideshow (Component)
      $('.slideshow').cb_slideshow();

      // Tab Systems (Component)
      $('.tabs').cb_tabs();

      // Tables (Component)
      $('.table').cb_table();

      // Pagination (Component)
      $('.pagination').cb_pagination();

    });
  };
}(jQuery));

/*
********************************************************************************
    CALL THE CODEBASE MASTER PLUGIN
    ===============================
    Remember to have this in your webpage or in your own jQuery script:

    $(document).codebase();

    Alternatively, build your own master function/plugin, in which you can
    call `codebase()` and/or the Codebase `cb_` plugins and do your own thing.
********************************************************************************
*/
