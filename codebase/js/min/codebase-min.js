!function($){"use strict";$(document).ready(function(){function e(){$(".reset-overlay").removeClass("reset-overlay-is-active"),$(".button-dropdown").removeClass("button-dropdown-is-revealed")}$("body").prepend('<span class="reset-overlay"></span>'),$(".reset-overlay").click(function(){e()}),$(window).resize(function(){e()}),$(".menubar").prepend('<span class="menubar-toggle"><i class="mega-octicon octicon-three-bars"></i></span>'),$(".menubar-toggle").click(function(){$(this).closest(".menubar").toggleClass("menubar-js-open")})})}(jQuery);
