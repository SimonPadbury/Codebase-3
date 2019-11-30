// CODEBASE ACTIVATOR

/* eslint-env browser */
/* jshint browser: true */

(function () {
  'use strict';

  // Activator Master Control
  [].forEach.call(document.querySelectorAll('[class*=-ctrl]'), function (el) {
    el.addEventListener('click', function (e) {

      e.stopPropagation();

      if (e.target.nodeName.toLowerCase() === 'a') {
        if (!(e.target.classList.contains('is-active'))) {
          e.preventDefault();
        }
      }

      // Obtain the component name, and use it in setting the variables
      var myClasses = this.getAttribute('class').split(' ');
      for (var i = 0; i < myClasses.length; i++) {
        myClasses[i] = myClasses[i].split('-');
      }
      myClasses = [].concat.apply([], myClasses);

      // Activator Variables
      var activeComponentClass = '.' + myClasses[myClasses.indexOf('ctrl') - 1];
      var activeContentClass = activeComponentClass + '-content';
      var activeContentId = '#' + this.dataset.contentId;

      // The Deactivator

      // (a.) Master deactivator
      function deactivate() {
        var isActive = document.querySelectorAll('.is-active');
        for (var i = 0; i < isActive.length; i++) {
          isActive[i].classList.remove('is-active');
        }
      }

      // (b.) Deactivate on `click outside to dismiss`
      function deactivateOutside() {
        document.body.addEventListener('click', function (e) {
          deactivate();
        });
      }

      // (c.) Deactivate on window resize
      function deactivateResize() {
        var windowWidth = window.innerWidth;
        window.addEventListener('resize', function () {
          if ( window.innerWidth !== windowWidth ) {
            deactivate();
          }
        });
      }

      function backdrop () {
        var backdrop = document.createElement('div');
        backdrop.id = 'backdrop';
        document.getElementsByTagName('body')[0].appendChild(backdrop);
      }

      // The Activator
      if (activeContentId === '#undefined') {

        // Simple Activator (using sibling `activeContentClass`)
        if ( (this.classList.contains('is-active')) ) {
          deactivate();
        } else {
          deactivate();
          this.classList.add('is-active');
          this.parentNode.classList.add('is-active');
          this.parentNode.querySelector(activeContentClass).classList.add('is-active');
        }

      } else {

        // Advanced Activator (using `data-content-id`)
        if ( (this.classList.contains('is-active')) ) {
          deactivate();
        } else {
          deactivate();
          this.classList.add('is-active');
          document.body.querySelector(activeContentId).parentNode.classList.add('is-active');
          document.body.querySelector(activeContentId).classList.add('is-active');
        }

      }

      deactivateOutside();
      deactivateResize();

      // Stop propagation when clicking Activator Content
      [].forEach.call(document.querySelectorAll('[class*="-content"]'), function(el) {
        el.addEventListener('click', function(e) {
          e.stopPropagation();
        });
      });

      // Activator Closure

      // (a.) Close by button/link (e.g. 'x' icon)
      [].forEach.call(document.querySelectorAll('[class*="-close"]'), function(el) {
        el.addEventListener('click', function(e) {
          if (e.target.nodeName.toLowerCase() === 'a') {
            e.preventDefault();
          }
          deactivate();
        });
      });

      // (b.) Close when clicking a hyperlink that targets on this same page
      [].forEach.call(document.querySelectorAll('a[href*="#"]'), function(el) {
        el.addEventListener('click', function() {
          deactivate();
        });
      }, false);

    });
  });  

}());