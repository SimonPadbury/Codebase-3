// RESPONSIVE TABLES (Components)
// ==============================
// • `.table--wrap-outer.table--wide`: adds an inset shadow to indicate that
// there is more table available (horizontally) that what can be seen.
// • `.table--wrap-inner`: the horizontal scrolling container.

(function ($) {

  'use strict';

  $.fn.cb_table_wide = function () {
    // called from within $('.table').cb_table();

    $('.table').each(function () {

      $(this).parent().parent().removeClass('table--wide');

      if ($(this).parent()[0].scrollWidth - 1 > $('.table--wrap-inner').innerWidth()) {
        $(this).parent().parent().addClass('table--wide');
      } else {
        $(this).parent().parent().removeClass('table--wide');
      }

    });

  };
}(jQuery));

(function ($) {

  'use strict';

  $.fn.cb_table = function () {
    // called by $('.table').cb_table();

    $(this).wrap('<div class="table--wrap-outer"><div class="table--wrap-inner" /></div>');

    $.fn.cb_table_wide();

    $(window).resize($.fn.cb_debounce(function () {
      $.fn.cb_table_wide();
    }, 250));

  };
}(jQuery));
