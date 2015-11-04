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

    // Button dropdowns

    $('.button-dropdown').append('&nbsp;<i class="octicon octicon-triangle-down"></i>');
    $('.button-dropdown').click(function(e) {
      e.preventDefault();
      if (!$(this).hasClass('button-dropdown-is-revealed')) {
        $(this).addClass('button-dropdown-is-revealed');
        $('.reset-overlay').addClass('reset-overlay-is-active');
      } else {
        reset_overlay();
      }
    });
    $('.button-dropdown span').click(function(e) {
      e.stopPropagation();
    });

    // Tabs

    $('.tab-label:first-of-type').addClass('is-front');
    $('.tab-label:first-of-type + .tab-card').addClass('is-front');

    $('.tab-label').click(function() {
      var tab_id = $(this).attr('data-tab');

      $(this).siblings().removeClass('is-front');

      $(this).addClass('is-front');
      $("#" + tab_id).addClass('is-front');
    });

  });
}(jQuery));
