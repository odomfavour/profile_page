jQuery(document).ready(function ($) {
  
  var navclone = function() {
    $('.js-clone-nav').each(function () {
      var $this = $(this);
      $this.clone().attr('class', 'clone-view').appendTo('.mobile-view-body');
    });

    // document.querySelector('.js-toggle').addEventListener('click', openNav)

    // function openNav() {
    //   document.querySelector('.mobile-view').classList.add(open);
    // }
    $('body').on('click', '.js-toggle', function (e) {
      var $this = $(this);
      e.preventDefault();
      if ($('.mobile-view').hasClass('.open')) {
        $('.mobile-view').removeClass('.open')
      } else {
        $('.mobile-view').addClass('.open')
      }
    })
  }
  navclone()
})

const menuBtn = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.mobile-view-close');
const navLink = document.querySelector('.nav-item');
const display = document.querySelector('.mobile-view');

let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
navLink.addEventListener('click', toggleMenu);
function toggleMenu() {
  if (!showMenu) {
    display.classList.add('open')
    showMenu = true;
  } else {
    display.classList.remove('open')
    showMenu = false;
  }
}