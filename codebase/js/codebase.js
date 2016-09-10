// DEBOUNCE (Utilities)
// ====================

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


// RESET OVERLAY (Utilities)
// =========================
// • Used by modals, dropdowns, off-canvas sidebar and anything else that
// needs to be dismissed by "clicking outside" the open/active element.
// • Put everything that needs `.reset-overlay` activity in this function.

// The reset

(function ($) {
  'use strict';
  $.fn.cb_reset = function () {

    $('.off-canvas-navicon, .off-canvas--right, .off-canvas--left').removeClass('off-canvas--is-open');

    $('.navbar').removeClass('navbar--is-open');
    if ($('.navbar__navicon').is(':visible')) {
      $('.navbar__content').slideUp();
    }
    $('.dropdown__toggle').removeClass('dropdown__toggle--is-toggled');
    $('.dropdown__content').removeClass('dropdown__content--is-revealed');

    $('.popover__wrap').removeClass('popover__wrap--is-open');

    $('.reset-overlay').removeClass('reset-overlay--darken');

    setTimeout(function () {
      $('.reset-overlay')
        .removeClass('reset-overlay--is-raised')
        .removeClass('reset-overlay--is-raised-higher');
    }, 300);

  };
}(jQuery));

// The reset-overlay

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


// DROPDOWNS (Utilities)
// =====================
// • Uses the Reset Overlay utility.
// • Can be applied to `<button>` or or any block element.
// • Also used for menubar dropdowns.

(function ($) {
  'use strict';
  $.fn.cb_dropdown_toggle = function () {
    // called by $('.dropdown__toggle').cb_dropdown_toggle()

    function cb_dropdown(e) {

      if ($('.reset-overlay').hasClass('reset-overlay--is-raised')) {

        $.fn.cb_reset();
        
      } else {
        
        if ($('.dropdown__toggle').hasClass('dropdown__toggle--is-toggled')) {
          
          $.fn.cb_reset();
          
        } else {

          e.preventDefault();

          /* jshint validthis: true */
          $(this)
            .addClass('dropdown__toggle--is-toggled')
            .next('.dropdown__content')
            .addClass('dropdown__content--is-revealed');
          $('.reset-overlay').addClass('reset-overlay--is-raised');

          $('.reset-overlay--is-raised').on('click', $.fn.cb_reset);
          $('.reset-overlay--is-raised').on('touchstart', $.fn.cb_reset);

          $('.dropdown__content').click(function (e) {
            e.stopPropagation();
          });

          $('.dropdown__content').touchstart(function (e) {
            e.stopPropagation();
          });

        }       
      }
    }

    $(this).on('click', cb_dropdown);
    $(this).on('touchstart', cb_dropdown);

  };
}(jQuery));


// OFF-CANVAS SIDEBARS (Layout)
// ============================
// Using the Reset Overlay utility.

(function ($) {
  'use strict';
  $.fn.cb_off_canvas_sidebar = function () {
    // called by $('.off-canvas-navicon').cb_off_canvas_sidebar();

    $('[class*="xs--off-canvas"]').prev().addClass('show--xs-only');
    $('[class*="sm--off-canvas"]').prev().addClass('show--sm-down');
    $('[class*="md--off-canvas"]').prev().addClass('show--md-down');
    $('[class*="lg--off-canvas"]').prev().addClass('show--lg-down');

    function cb_off_canvas_open(e) {
      if (!$('.off-canvas-navicon').hasClass('off-canvas--is-open')) {

        /* jshint validthis: true */
        var offCanvas = $(this).data('off-canvas');

        $('.reset-overlay').addClass('reset-overlay--is-raised');

        $('[data-off-canvas=' + offCanvas + ']').addClass('off-canvas--is-open');
        $('#' + offCanvas).addClass('off-canvas--is-open');

        $('.xs--off-canvas').scrollTop(0);
        $('.sm--off-canvas').scrollTop(0);
        $('.md--off-canvas').scrollTop(0);
        $('.lg--off-canvas').scrollTop(0);

        $('.reset-overlay--is-raised').on('click', $.fn.cb_reset);
        $('.reset-overlay--is-raised').on('touchstart', $.fn.cb_reset);

      } else {
        $.fn.cb_reset();
      }
      e.preventDefault();
    }

    $('.off-canvas-navicon').on('click', cb_off_canvas_open);
    $('.off-canvas-navicon').on('touchstart', cb_off_canvas_open);


  };
}(jQuery));


// NAVBARS (Components)
// ====================
// • Using navbar dropdowns (see herein below).

(function ($) {

  'use strict';

  $.fn.cb_navbar = function () {
    // called by $('.navbar').cb_navbar();

    $(this).wrap('<div class="navbar__has-wrap"></div>');
    $('.navbar--fixed').parent().addClass('navbar__has-wrap--is-fixed');
    if ($(this).hasClass('navbar--fixed')) {
      $('body').addClass('body--navbar-is-fixed');
    }

    // navbar Navicon
    // ---------------
    // For revealing collapsed navbar on sm screens.

    function cb_navbar_navicon(e) {
      /* jshint validthis: true */
      if (!$(this).parent('.navbar').hasClass('navbar--is-open')) {
        $(this).parent('.navbar').addClass('navbar--is-open');
        $('.reset-overlay').addClass('reset-overlay--is-raised');
        $(this).siblings('.navbar__content').slideDown();
        
        $('.reset-overlay--is-raised').on('click', $.fn.cb_reset);
          $('.reset-overlay--is-raised').on('touchstart', $.fn.cb_reset);
        
      } else {
        $.fn.cb_reset();
      }
      e.preventDefault();
    }

    $('.navbar__navicon').on('click', cb_navbar_navicon);
    $('.navbar__navicon').on('touchstart', cb_navbar_navicon);

    // Navbar Dropdowns
    // -----------------
    // Below the navbar breakpoint, parent links are followable/
    // Above the navbar breakpoint, clicking a parent link *once* will open the
    // dropdown, and clicking it *a second time* will follow the parent link.
    // The dropdown can be dismissed by 'clicking outside', i.e. cb_reset().

    $('.navbar ul ul')
      .addClass('dropdown__content')
      .parent().find('>a')
      .addClass('dropdown__toggle')
      .append('&nbsp;<i class="dropdown__caret fa fa-caret-down"/>')
      .cb_dropdown_toggle();

  };
}(jQuery));


// POPOVERS (Components)
// =====================
// • Using the Reset Overlay utility.

(function ($) {

  'use strict';

  $.fn.cb_popover = function () {
    // called by $('.popover').cb_popover();

    $(this).wrap('<div class="popover__wrap" />');

    function cb_popover_open(e) {

      e.preventDefault();

      /* jshint validthis: true */
      $(this).blur();

      var popover_id = $(this).attr('data-popover');

      $('#' + popover_id).scrollTop(0).parent().addClass('popover__wrap--is-open');
      $('.reset-overlay').addClass('reset-overlay--is-raised-higher reset-overlay--darken');

      $('.popover').click(function (e) {
        e.stopPropagation();
      });
      
      $('.popover__wrap--is-open').on('click', $.fn.cb_reset);
      
      $('.popover__close').on('click', $.fn.cb_reset);

      popover_id = null;
    }

    $('.popover__open').on('click', cb_popover_open);

  };
}(jQuery));


// SLIDESHOWS (Components)
// =======================

(function ($) {
  'use strict';
  $.fn.cb_slideshow = function () {
    // called by $('.slideshow').cb_slideshow();

    // Slideshow Arrows and Pager Setup
    $(this).prepend('<div class="slideshow__prev"><span></span></div><div class="slideshow__next"><span></span></div>');
    $(this).append('<div class="slideshow__pager-wrap" />');
    $('.slideshow__item').each(function(){
      $('.slideshow__pager-wrap').append('<div class="slideshow__pager" />');
    });

    // Slideshow Variables

    var slideLeftPos = $('.slideshow__inner').scrollLeft(),
      slideWidth = $('.slideshow').width(),
      slideTotal = $('.slideshow__inner').children().length,
      slideCount = 1;

    // Make Slideshow Responsive

    $(window).resize($.fn.cb_debounce(function () {
      slideLeftPos = $('.slideshow__inner').scrollLeft();
      slideWidth = $('.slideshow').width();
      $('.slideshow__inner').animate({
        scrollLeft: (slideWidth * slideCount) - slideWidth
      }, 250);
    }, 250));

    // Slideshow Prev Arrow

    function cb_slideshow_prev() {
      if (slideCount > 1) {
        $('.slideshow__inner').animate({
          scrollLeft: slideLeftPos - slideWidth
        }, {
          duration: 500,
          complete: function () {
            slideLeftPos = $('.slideshow__inner').scrollLeft();
            slideCount--;
          }
        });
        // Reset the pager
        $('.slideshow__pager').removeClass('is-current');
        $('.slideshow__pager:nth-of-type(' + (slideCount - 1) + ')').addClass('is-current');
      }
    }

    $('.slideshow__prev span').on('click', function () {
      cb_slideshow_prev();
    });

    // Slideshow Next Arrow

    function cb_slideshow_next() {
      if (slideCount < (slideTotal)) {
        $('.slideshow__inner').animate({
          scrollLeft: slideLeftPos + slideWidth
        }, {
          duration: 500,
          complete: function () {
            slideLeftPos = $('.slideshow__inner').scrollLeft();
            slideCount++;
          }
        });
        // Reset the pager
        $('.slideshow__pager').removeClass('is-current');
        $('.slideshow__pager:nth-of-type(' + (slideCount + 1) + ')').addClass('is-current');
      }
    }

    $('.slideshow__next span').on('click', function () {
      cb_slideshow_next();
    });

    // Slideshow Pager

    $('.slideshow__pager:nth-of-type(' + (slideCount) + ')').addClass('is-current');

    $('.slideshow__pager').on('click', function () {
      slideCount = $(this).index() + 1;
      slideLeftPos = slideWidth * (slideCount - 1);
      $('.slideshow__inner').animate({
        scrollLeft: slideWidth * (slideCount - 1)
      }, 500);
      // Reset the pager
      $('.slideshow__pager').removeClass('is-current');
      $(this).addClass('is-current');
    });

  };
}(jQuery));


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


// PAGINATION (Components)
// =======================
// • Just making the current link unfollowable.

(function ($) {

  'use strict';

  $.fn.cb_pagination = function () {
    // called by $('.pagination').cb_pagination();

    $('.pagination__current a, .pagination__current').click(function (e) {
      e.preventDefault();
    });

  };
}(jQuery));


// CODEBASE v.1.3
// ==============
// Notes:
// • Codebase JS module files are `@codekit-prepend`ed in here.
// • the `cb_` prefix identifies a Codebase function.

// @codekit-prepend "debounce.js", "reset-overlay.js", "dropdowns.js", "off-canvas-sidebars.js", "navbars.js", "popovers.js", "slideshows.js", "tab-systems.js", "responsive-tables.js", "pagination.js";

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


