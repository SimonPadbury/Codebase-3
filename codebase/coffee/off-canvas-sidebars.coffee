# OFF-CANVAS SIDEBARS

$.fn.cb_off_canvas_sidebar = ->
  # called by $(".off-canvas-navicon").cb_off_canvas_sidebar();

  cb_off_canvas_close = ->
    $(".off-canvas-navicon, .off-canvas--right, .off-canvas--left").removeClass "off-canvas--is-open"
    $(".reset-overlay").removeClass "reset-overlay--is-raised"

  cb_off_canvas_open = (e) ->

    e.preventDefault()

    if $(".off-canvas-navicon").hasClass "off-canvas--is-open"

      cb_off_canvas_close

    else

      ### jshint validthis: true ###

      off_canvas = $(this).data("off-canvas")

      $(".reset-overlay").addClass "reset-overlay--is-raised"
      $("[data-off-canvas=" + off_canvas + "]").addClass "off-canvas--is-open"
      $("#" + off_canvas).addClass "off-canvas--is-open"

      $(".off-canvas--xs, .off-canvas--sm, .off-canvas--md, .off-canvas--lg").scrollTop 0

      $(".reset-overlay--is-raised, .off-canvas--is-open a[href*='#'], .off-canvas__close").on "click", cb_off_canvas_close

  $("[class*='off-canvas--xs']").prev().addClass "show--xs-only"
  $("[class*='off-canvas--sm']").prev().addClass "show--sm-down"
  $("[class*='off-canvas--md']").prev().addClass "show--md-down"
  $("[class*='off-canvas--lg']").prev().addClass "show--lg-down"

  $(".off-canvas-navicon").on "click", cb_off_canvas_open
  $(".off-canvas-navicon").on "touchstart", cb_off_canvas_open
