// CODEBASE TOGGLER
// ================

(function () {
  "use strict";

  // Document Ready
  document.addEventListener("DOMContentLoaded", function () {

    // TOGGLER MASTER CONTROL

    [].forEach.call(document.querySelectorAll("[data-toggle-id]"), function(el) {
      el.addEventListener("click", function(e) {

        e.stopPropagation();

        // Get Toggle ID

        var toggleID = "#" + this.getAttribute("data-toggle-id");
        var toggleClasses = this.getAttribute("data-toggle-class");

        // TOGGLER

        document.body.querySelector(toggleID).classList.toggle(toggleClasses);

      });
    });

  }, false);

}());
