// TAB SYSTEMS (Components)
// ========================

(function ($) {
  'use strict';
  $.fn.cb_tabs = function () {
    // called by $('.tabs').cb_tabs();

    $('.tabs__label:first-of-type').addClass('tabs__label--is-front');
    $('.tabs__label:first-of-type + .tabs__card').addClass('tabs__card--is-front');

    function cb_tabs_operation() {

      /* jshint validthis: true */
      var tab_id = $(this).attr('data-tabs');

      $(this).siblings().removeClass('tabs__label--is-front').removeClass('tabs__card--is-front');
      $(this).addClass('tabs__label--is-front');
      $("#" + tab_id).addClass('tabs__card--is-front');
    }

    $('.tabs__label').on('click', cb_tabs_operation);
    $('.tabs__label').on('touchstart', cb_tabs_operation);

    // `.tabs--left`

    var tabsLeft_minHeight = 0;

    $(".tabs--left .tabs__label").each(function () {
      tabsLeft_minHeight += $(this).outerHeight();
    });

    function cb_tabs_left_height() {

      var tabsLeft_height = $('.tabs--left .tabs__card--is-front').height();

      $('.tabs--left .tabs__card--is-front .tabs__card-content').css({
        'min-height': tabsLeft_minHeight * 1.15
      });
      tabsLeft_height = $('.tabs--left .tabs__card--is-front').height();
      $('.tabs--left').height(tabsLeft_height);
    }

    cb_tabs_left_height();

    $('.tabs--left .tabs__label').on('click', cb_tabs_left_height);
    $('.tabs--left .tab__label').on('touchstart', cb_tabs_left_height);

    $(window).resize($.fn.cb_debounce(function () {
      cb_tabs_left_height();
    }, 250));

  };
}(jQuery));
