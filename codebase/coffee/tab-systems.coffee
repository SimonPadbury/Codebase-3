# TAB SYSTEMS

$.fn.cb_tabs = ->
  # called by $(".tabs").cb_tabs();

  cb_tabs_operation = ->

    ### jshint validthis: true ###

    tab_id = $(this).attr("data-tabs")
    $(this).siblings().removeClass("tabs__label--is-front").removeClass "tabs__card--is-front"
    $(this).addClass "tabs__label--is-front"
    $("#" + tab_id).addClass "tabs__card--is-front"

  cb_tabs_left_height = ->
    tabsLeft_height = $(".tabs--left .tabs__card--is-front").height()
    $(".tabs--left .tabs__card--is-front .tabs__card-content").css {
      "min-height": tabsLeft_minHeight * 1.2
    }
    tabsLeft_height = $(".tabs--left .tabs__card--is-front").height()
    $(".tabs--left").height tabsLeft_height

  $(".tabs__label:first-of-type").addClass "tabs__label--is-front"
  $(".tabs__label:first-of-type + .tabs__card").addClass "tabs__card--is-front"
  $(".tabs__label").on "click", cb_tabs_operation
  $(".tabs__label").on "touchstart", cb_tabs_operation

  # `.tabs--left`

  tabsLeft_minHeight = 0
  $(".tabs--left .tabs__label").each ->
    tabsLeft_minHeight += $(this).outerHeight()

  cb_tabs_left_height()

  $(".tabs--left .tabs__label").on "click", cb_tabs_left_height
  $(".tabs--left .tab__label").on "touchstart", cb_tabs_left_height
  $(window).resize $.fn.cb_debounce((->
    cb_tabs_left_height()
  ), 250)
