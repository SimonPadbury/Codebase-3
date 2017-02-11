# MENU_MARKER

(($) ->
  "use strict"

  $.fn.cb_menu_marker = ->
    # called by $(".menu-marker").cb_menu_marker();

    menu_marker = $(".menu-marker")
    menu_marker_1 = $(".menu-marker:first-of-type")
    menu_marker_top = $(".menu-marker-wrap").offset().top
    menu_marker_bottom = $(".menu-marker-wrap").outerHeight()
    menu_marker_section = $(".menu-marker-section")

    menu_marker.find("a:first").addClass "active"

    $(window).on "scroll", ->
      current_position = $(this).scrollTop()

      if current_position >= menu_marker_top and current_position <= menu_marker_bottom
        menu_marker.find("a").removeClass "active"

      menu_marker_section.each ->
        menu_marker_section_top = $(this).offset().top
        menu_marker_section_bottom = menu_marker_section_top + $(this).outerHeight()

        if current_position >= menu_marker_section_top and current_position <= menu_marker_section_bottom
          menu_marker.find("a").removeClass "active"
          menu_marker.find("a[href='#" + $(this).attr("id") + "']").addClass "active"

) jQuery
