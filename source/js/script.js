const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let navMain = document.querySelector('.main-header__nav');
let navToggle = document.querySelector('.main-header__nav-toggle');
let buttonSliderNext = document.querySelector('.promo__button--next');
let buttonSliderPrev = document.querySelector('.promo__button--prev');

buttonSliderNext.classList.remove('promo__button--no-js');
buttonSliderPrev.classList.remove('promo__button--no-js');
navMain.classList.remove('main-header__nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-header__nav--closed')) {
    navMain.classList.remove('main-header__nav--closed')
    navMain.classList.add('main-header__nav--opened')

  } else {
    navMain.classList.add('main-header__nav--closed')
    navMain.classList.remove('main-header__nav--opened')
  }
})

const map = L.map('map')
  .setView({
    lat: 59.96842,
    lng: 30.31755,
  }, 18);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 59.96835,
    lng: 30.31763,
  },
  {
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);
