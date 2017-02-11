###
CODEBASE 2.x PREVIEW || MIT Licence
===========================
http://simonpadbury.github.io/Codebase/
###

# Prepend these:
# ==============
# debounce
# reset-overlay
# showhide
# dropdowns
# off-canvas-sidebars
# menu-marker
# pagination
# popovers
# slideshows
# tab-systems
# responsive-tables

###
CODEBASE MASTER PLUGIN
###

"use strict"

$.fn.codebase = ->
  # called by $(document).codebase();

  $(document).ready ->

    # alert(jQuery)

    $("body").cb_reset_overlay()
    $(".showhide__toggle").cb_showhide_toggle()
    $(".showhide__dismiss").cb_showhide_dismiss()
    $(".dropdown__toggle").cb_dropdown_toggle()
    $(".off-canvas-navicon").cb_off_canvas_sidebar()
    $(".pagination").cb_pagination()
    $(".popover").cb_popover()
    $(".slideshow").cb_slideshow()
    $(".tabs").cb_tabs()
    $(".table").cb_table()
    $(".menu-marker").cb_menu_marker()

$(document).codebase()
