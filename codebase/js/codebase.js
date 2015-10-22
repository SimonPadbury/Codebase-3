// CODEBASE
// ========

(function($) {
  "use strict";
  $(document).ready(function() {

    // Menubar
    $('.menubar').prepend('<span class="menubar-toggle"><i class="mega-octicon octicon-three-bars"></i></span>');
    $('.menubar-toggle').click(function() {
      $(this).closest('.menubar').toggleClass('menubar-js-open');
    });

  });
}(jQuery));
