
// CODEBASE v.1.1
// ==============
// Note: the `cb_` prefix identifies a Codebase function.

/*jslint browser: true*/
/*jshint unused: false*/
/*global $, jQuery*/

/*
********************************************************************************
    UTILITIES
********************************************************************************
*/

/*
--------------------------------------------------------------------------------
    Debounce
--------------------------------------------------------------------------------
*/

(function ($) {
  'use strict';
  $.fn.cb_debounce = function (fn, delay) {

    var debounceTimer = null;

    return function () {
      var context = this,
        args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };

  };
}(jQuery));

/*
--------------------------------------------------------------------------------
    Reset Overlay
    -------------

    Used for modals, dropdowns, off-canvas sidebar and anything else that needs
    to be dismissed by "clicking outside" the open/active element.

    Put everything that needs `.reset-overlay` activity in this function.
--------------------------------------------------------------------------------
*/

// Reset
// -----

(function ($) {
  'use strict';
  $.fn.cb_reset = function (e) {
    
    
    $('body').removeClass('off-canvas--is-open');
    $('.reset-overlay')
      .removeClass('reset-overlay--darken')
      .removeClass('reset-overlay--is-raised')
      .removeClass('reset-overlay--is-raised-higher');
    $('.menubar').removeClass('menubar--is-open');
    if ($('.menubar__navicon').is(':visible')) {
      $('.menubar__content').slideUp();
    }
    $('.dropdown__toggle').removeClass('dropdown__toggle--is-toggled');
    $('.dropdown__content').removeClass('dropdown__content--is-revealed');
    $('.modal__wrap').removeClass('modal__wrap--is-open');
  };
}(jQuery));

// Reset Overlay
// -------------

(function ($) {

  'use strict';

  $.fn.cb_reset_overlay = function () {
  // called by $('body').cb_reset_overlay();

    $(this).prepend('<span class="reset-overlay"></span>');

    $(window).resize($.fn.cb_debounce(function () {
      $.fn.cb_reset();
    }, 250));

  };
}(jQuery));

/*
--------------------------------------------------------------------------------
    Dropdowns
    ---------
    Uses the Reset Overlay utility.

    Can be applied to `<button>` or or any block element.

    Also used for menubar dropdowns.
--------------------------------------------------------------------------------
*/

(function ($) {
  'use strict';
  $.fn.cb_dropdown_toggle = function () {
  // called by $('.dropdown__toggle').cb_dropdown_toggle()

    $(this).append('&nbsp;<i class="dropdown__caret fa fa-caret-down"></i>');

    function cb_dropdown(e) {

      if (!$('.reset-overlay').hasClass('reset-overlay--is-raised')) {
        e.preventDefault();
      }

      /*jshint validthis: true */
      if (!$(this).next('.dropdown__content').hasClass('dropdown__content--is-revealed')) {

        $(this).addClass('dropdown__toggle--is-toggled');
        $(this).next('.dropdown__content').addClass('dropdown__content--is-revealed');
        $('.reset-overlay').addClass('reset-overlay--is-raised');

        $('.reset-overlay--is-raised').on('click', $.fn.cb_reset);
        $('.reset-overlay--is-raised').on('touchstart', $.fn.cb_reset);

        $('.dropdown__content').click(function (e) {
          e.stopPropagation();
        });

        $('.dropdown__content').touchstart(function (e) {
          e.stopPropagation();
        });
        
      } else {
        $.fn.cb_reset();
      }
      
    }

    $(this).on('click', cb_dropdown);
    $(this).on('touchstart', cb_dropdown);

  };
}(jQuery));

/*
********************************************************************************
    LAYOUT
********************************************************************************
*/

/*
--------------------------------------------------------------------------------
    Off-Canvas Sidebar
    ------------------
    Uses the Reset Overlay utility.
--------------------------------------------------------------------------------
*/

(function ($) {
  'use strict';
  $.fn.cb_off_canvas_sidebar = function () {
  // called by $('.off-canvas-navicon').cb_off_canvas_sidebar();

    $('[class*="xs--off-canvas"]').prev().addClass('show--xs-only');
    $('[class*="sm--off-canvas"]').prev().addClass('show--sm-down');
    $('[class*="md--off-canvas"]').prev().addClass('show--md-down');
    $('[class*="lg--off-canvas"]').prev().addClass('show--lg-down');

    function off_canvas_open() {
      $('body').addClass('off-canvas--is-open');
      $('.reset-overlay').addClass('reset-overlay--is-raised');
      $('.xs--off-canvas').scrollTop(0);
      $('.sm--off-canvas').scrollTop(0);
      $('.md--off-canvas').scrollTop(0);
      $('.lg--off-canvas').scrollTop(0);

      $('.reset-overlay--is-raised').on('click', $.fn.cb_reset);
      $('.reset-overlay--is-raised').on('touchstart', $.fn.cb_reset);
    }

    function off_canvas_navicon(e) {
      if (!$('body').hasClass('off-canvas--is-open')) {
        off_canvas_open();
      } else {
        $.fn.cb_reset();
      }
      e.preventDefault();
    }
    $('.off-canvas-navicon').on('click', off_canvas_navicon);
    $('.off-canvas-navicon').on('touchstart', off_canvas_navicon);


  };
}(jQuery));


/*
********************************************************************************
    COMPONENTS
********************************************************************************
*/

/*
--------------------------------------------------------------------------------
    Menubar
    -------
    Uses menubar dropdowns (below).
--------------------------------------------------------------------------------
*/

(function ($) {

  'use strict';

  $.fn.cb_menubar = function () {
  // called by $('.menubar').cb_menubar();

    $(this).wrap('<div class="menubar__has-wrap"></div>');
    $('.menubar--fixed').parent().addClass('menubar__has-wrap--is-fixed');
    if ($(this).hasClass('menubar--fixed')) {
      $('body').addClass('body--menubar-is-fixed');
    }

    // Menubar Navicon
    // ---------------
    // For revealing collapsed menubar on sm screens.

    function cb_menubar_navicon(e) {
      /*jshint validthis: true */
      if (!$(this).parent('.menubar').hasClass('menubar--is-open')) {
        $(this).parent('.menubar').addClass('menubar--is-open');
        $('.reset-overlay').addClass('reset-overlay--is-raised');
        $(this).siblings('.menubar__content').slideDown();
      } else {
        $.fn.cb_reset();
      }
      e.preventDefault();
    }

    $('.menubar__navicon').on('click', cb_menubar_navicon);
    $('.menubar__navicon').on('touchstart', cb_menubar_navicon);

    // Menubar Dropdowns
    // -----------------
    // Below the menubar breakpoint, parent links are followable/
    // Above the menubar breakpoint, clicking a parent link *once* will open the
    // dropdown, and clicking it *a second time* will follow the parent link.
    // The dropdown can be dismissed by 'clicking outside', i.e. cb_reset().

    $('.menubar ul ul')
      .addClass('dropdown__content')
      .parent().find('>a').addClass('dropdown__toggle').cb_dropdown_toggle();

    $('.menubar .dropdown__toggle').on('click', function () {
      location.href = $(this).attr('href');
    });

  };
}(jQuery));

/*
--------------------------------------------------------------------------------
    Modals
    ------

    Uses the Reset Overlay utility.
--------------------------------------------------------------------------------
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

/*
--------------------------------------------------------------------------------
    Tab Systems
--------------------------------------------------------------------------------
*/

(function ($) {
  'use strict';
  $.fn.cb_tabs = function () {
  // called by $('.tabs').cb_tabs();

    $(this).addClass('tabs__label--is-front');
    $('.tabs__label:first-of-type + .tabs__card').addClass('tabs__card--is-front');

    function cb_tabs_operation() {

      /*jshint validthis: true */
      var tab_id = $(this).attr('data-tabs');

      $(this).siblings().removeClass('tabs__label--is-front').removeClass('tabs__card--is-front');
      $(this).addClass('tabs__label--is-front');
      $("#" + tab_id).addClass('tabs__card--is-front');
    }

    $('.tabs__label').on('click', cb_tabs_operation);
    $('.tabs__label').on('touchstart', cb_tabs_operation);

    // .tabs-left

    var tabsLeft_minHeight = 0;

    $(".tabs--left .tabs__label").each(function () {
      tabsLeft_minHeight += $(this).outerHeight();
    });

    function cb_tabs_left_height() {

      var tabsLeft_height = $('.tabs--left .tabs__card--is-front').height();

      $('.tabs--left .tabs__card--is-front .tabs__card-content').css({'min-height': tabsLeft_minHeight * 1.15});
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

/*
--------------------------------------------------------------------------------
    Tables
    ------

    .table--wrap-outer.table--wide : adds an inset shadow to indicate that
    there is more table available (horizontally) that that which can be seen.

    .table--wrap-inner : the horizontal scrolling container.
--------------------------------------------------------------------------------
*/

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

/*
--------------------------------------------------------------------------------
    Pagination
--------------------------------------------------------------------------------
*/

(function ($) {

  'use strict';

  $.fn.cb_pagination = function () {
  // called by $('.pagination').cb_pagination();

    $('.pagination__item--current a, .pagination__link--current').click(function (e) {
      e.preventDefault();
    });

  };
}(jQuery));

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

      // Menubar (Component)
      $('.menubar').cb_menubar();

      // Modals
      $('.modal').cb_modal();

      // Off-Canvas Sidebar (Layout)
      $('.off-canvas-navicon').cb_off_canvas_sidebar();

      // Tabs
      $('.tabs__label:first-of-type').cb_tabs();

      // Tables
      $('.table').cb_table();

      // Pagination
      $('.pagination').cb_pagination();

    });
  };
}(jQuery));

/*
********************************************************************************
    CODEBASE MASTER PLUGIN CALL
    ===========================
    Remember to have this in your webpage or in your own jQuery script:

    $(document).codebase();

    Alternatively, build your own master function/plugin, in which you can
    call `codebase()` and the Codebase `cb_` plugins and do your own thing.
********************************************************************************
*/
