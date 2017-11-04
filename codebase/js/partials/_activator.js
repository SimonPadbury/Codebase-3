// CODEBASE ACTIVATOR
// ==================

(function () {
  "use strict";

  // Document Ready
  document.addEventListener("DOMContentLoaded", function () {

    // ACTIVATOR MASTER CONTROL

    [].forEach.call(document.querySelectorAll("[class*=__ctrl]"), function(el) {
      el.addEventListener("click", function(e) {

        e.stopPropagation();

        if ( e.target.nodeName.toLowerCase() === "a" ) {
          if ( !(e.target.classList.contains("is-active")) ) {
            e.preventDefault();
          }
        }

        // Obtain the component name, and use it in setting the variables.

        var myClasses = this.getAttribute("class").split(" ");
        for(var i = 0; i < myClasses.length; i++) {
          myClasses[i] = myClasses[i].split("__");
        }
        myClasses = [].concat.apply([], myClasses);

        // Activator Variables.

        var activeComponentClass = "." + myClasses[myClasses.indexOf("ctrl") - 1],
            //activeCtrlClass = activeComponentClass + "__ctrl",
            activeContentClass = activeComponentClass + "__content",
            activeContentId = "#" + this.dataset.contentId;
            //bodyActive = "body.is-active";

        // DEACTIVATE

        // (a.) Master deactivator.

        function deactivate() {
          var isActive = document.querySelectorAll(".is-active");
          for (var i = 0; i < isActive.length; i++) {
            isActive[i].classList.remove("is-active");
          }
        }

        // (b.) Deactivate on `click outside to dismiss`.

        function deactivateOutside() {
          document.body.addEventListener("click", function (e) {
            for (var element = e.target; element; element = element.parentNode) {
              if ( !(element.classList.contains("is-active")) ) {
                deactivate();
              }
            }
          });
          document.body.addEventListener("touchstart", function (e) {
            for (var element = e.target; element; element = element.parentNode) {
              if ( !(element.classList.contains("is-active")) ) {
                deactivate();
              }
            }
          });
        }

        // (c.) Deactivate on window resize.

        function deactivateResize() {
          window.addEventListener("resize", function () {
            deactivate();
          });
        }

        // ACTIVATE

        if (activeContentId === "#undefined") {

          // Simple Toggle (using sibling `activeContentClass`).

          if ( (this.classList.contains("is-active")) ) {
            deactivate();
          } else {
            deactivate();
            this.classList.add("is-active");
            this.parentNode.classList.add("is-active");
            this.parentNode.querySelector(activeContentClass).classList.add("is-active");
            //document.body.classList.add("is-active");
          }

        } else {

          // Advanced Toggle (using `data-content-id`).

          if ( (this.classList.contains("is-active")) ) {
            deactivate();
          } else {
            deactivate();
            this.classList.add("is-active");
            document.body.querySelector(activeContentId).parentNode.classList.add("is-active");
            document.body.querySelector(activeContentId).classList.add("is-active");
          }

        }

        deactivateOutside();
        deactivateResize();

        // Stop propagation when clicking Activator Content.

        [].forEach.call(document.querySelectorAll("[class*=__content]"), function(el) {
          el.addEventListener("click", function(e) {
            e.stopPropagation();
          });
          el.addEventListener("touchstart", function(e) {
            e.stopPropagation();
          });
        });

        // ACTIVATOR CLOSE

        // (a.) Close by button/link (e.g. "x" icon).

        [].forEach.call(document.querySelectorAll("[class*=__close]"), function(el) {
          el.addEventListener("click", function(e) {
            if (e.target.nodeName.toLowerCase() === "a") {
              e.preventDefault();
            }
            deactivate();
          });
        });

        // (b.) Close dropdown by clicking elsewhere on a (complex) menu or menubar.
        // Enables one dropdown to be closed when another is opened.

        [].forEach.call(document.querySelectorAll(".menubar__content"), function(el) {
          if (activeComponentClass === ".dropdown") {
            el.addEventListener("click", function() {
              deactivate();
            });
          }
        });

        // (c.) Close when clicking a hyperlink within.
        // E.g. close off-canvas if link goes somewhere on same page.

        [].forEach.call(document.querySelectorAll("a[href*='#']"), function(el) {
          el.addEventListener("click", function() {
            deactivate();
          });
        }, false);

        // ACTIVATOR NO-DISMISS

        [].forEach.call(document.querySelectorAll("[class*=--no-dismiss]"), function(el) {
          el.addEventListener("click", function(e) {
            e.stopPropagation();
          });
          el.addEventListener("touchstart", function(e) {
            e.stopPropagation();
          });
        });

      });
    });

  }, false);

}());
