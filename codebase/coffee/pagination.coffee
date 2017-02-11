# PAGINATION
# • Just making the current link unfollowable.

$.fn.cb_pagination = ->
  # called by $(".pagination").cb_pagination();

  $(".pagination__current a, .pagination__current").click (e) ->
    e.preventDefault()
