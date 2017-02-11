###
# RESET OVERLAY
# • Used by popovers, dropdowns, off-canvas sidebar and anything else that
# needs to be dismissed by "clicking outside" the open/active element.
# • Put everything that needs `.reset-overlay` activity into this function.
REDEPLOYMENT
• [ ] off-canvas
• [√] popover
• [√] showhide--is-resettable
• [√] dropdown
###

$.fn.cb_reset_overlay = ->
  # called by $("body").cb_reset_overlay();

  $(this).prepend "<span class='reset-overlay'></span>"
