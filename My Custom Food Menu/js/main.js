
(function() {
  "use strict";

    /**
   * Easy selector helper function
   */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Menu isotope and filter
   */
  window.addEventListener('load', () => {
    let menuContainer = select('.menu-container');
    if (menuContainer) {
      let menuIsotope = new Isotope(menuContainer, {
        itemSelector: '.menu-item',
        layoutMode: 'fitRows'
      });

      let menuFilters = select('#menu-flters li', true);

      on('click', '#menu-flters li', function(e) {
        e.preventDefault();
        menuFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        menuIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });

      }, true);
    }

  });

})()

 /* Hours of Operation*/
 /* Javescript  */

 const time = () => {

  const activerow = document.querySelector('#activerow');

  const monday = document.querySelector('.monday');
  const tuesday = document.querySelector('.tuesday');
  const wednesday = document.querySelector('.wednesday');
  const thursday = document.querySelector('.thursday');
  const friday = document.querySelector('.friday');
  const saturday = document.querySelector('.saturday');
  const sunday = document.querySelector('.sunday');


  switch (new Date().getDay()) {

      case 1:
          monday.setAttribute("id", "activerow");
          break;
      case 2:
          tuesday.setAttribute("id", "activerow");
          break;
      case 3:
          wednesday.setAttribute("id", "activerow");
          break;
      case 4:
          thursday.setAttribute("id", "activerow");
          break;
      case 5:
          friday.setAttribute("id", "activerow");
          break;
      case 6:
          saturday.setAttribute("id", "activerow");
          break;
      case 0:
          sunday.setAttribute("id", "activerow");
          break;
  }

}
time();