// Squeezeme - browser window resizer

(function ($) {
  "use strict";
  $(document).ready(function () {

    // Edit or add to these viewport widths to suit yourself
    var squeezmeWidths = ["320px", "480px", "768px", "1024px", "1200px"];

    $.each(squeezmeWidths, function (go, resizeTo) {
      $('.squeezme-menubar ul').append($('<li class="' + resizeTo + '"' + '><span>' + resizeTo + '</span></li>'));
      $('.' + resizeTo).click(function () {
        $('.squeezme').animate({
          width: resizeTo
        }, 400);
      });
    });
    $('.squeezme-menubar .max-width').click(function () {
      $('.squeezme').animate({
        width: '100%'
      }, 400);
    });

  });
}(jQuery));
