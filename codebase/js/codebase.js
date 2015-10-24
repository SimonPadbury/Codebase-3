// CODEBASE
// ========

(function($) {
  "use strict";
  $(document).ready(function() {

    // Reset overlay

    $('body').prepend('<span class="reset-overlay"></span>');

    function reset_overlay() {
      // Put everything that needs .reset-overlay activity in here
      $('.reset-overlay').removeClass('reset-overlay-is-active');
      $('.button-dropdown').removeClass('button-dropdown-is-revealed');
    }

    $('.reset-overlay').click(function() {
      reset_overlay();
    });

    $(window).resize(function() {
      reset_overlay();
    });

    // Menubar

    $('.menubar').prepend('<span class="menubar-toggle"><i class="mega-octicon octicon-three-bars"></i></span>');
    $('.menubar-toggle').click(function() {
      $(this).closest('.menubar').toggleClass('menubar-js-open');
    });

  });
}(jQuery));
