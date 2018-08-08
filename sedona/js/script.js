let booking = document.querySelector('.booking');
let openBooking = document.querySelector('.open-form-button');
let adults = document.querySelector('#booking-adults');
let children = document.querySelector('#booking-children');
let addAdults = document.querySelector('.input-adults .residents-number-add');
let reduceAdults = document.querySelector('.input-adults .residents-number-reduce');
let addChildren = document.querySelector('.input-children .residents-number-add');
let reduceChildren = document.querySelector('.input-children .residents-number-reduce');

booking.classList.add('booking-popup');

openBooking.addEventListener('click', function (evt) {
  evt.preventDefault();
  booking.classList.toggle('booking-popup');
});

addAdults.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (parseInt(adults.value) < 99) {
    adults.value = parseInt(adults.value) + 1;
  } else {
    adults.value = 99;
  }
});

reduceAdults.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (parseInt(adults.value) > 1) {
    adults.value = parseInt(adults.value) - 1;
  } else {
    adults.value = 1;
  }
});

addChildren.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (parseInt(children.value) < 99) {
    children.value = parseInt(children.value) + 1;
  } else {
    children.value = 99;
  }
});

reduceChildren.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (parseInt(children.value) > 0) {
    children.value = parseInt(children.value) - 1;
  } else {
    children.value = 0;
  }
});
