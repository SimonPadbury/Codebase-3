// CODEBASE RESPONSIVE TABLE
// =========================

(function () {
  "use strict";

  [].forEach.call(document.querySelectorAll(".table"), function(el) {

    var table = el.outerHTML,
        tableWrapped = "<div class=table--wrap>" + table + "</div>";

    el.outerHTML = tableWrapped;

  });

}());
