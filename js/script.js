var feedbackButton = document.querySelector('.write-us-button');
var feedbackModal = document.querySelector('.modal-feedback');
var feedbackClose = feedbackModal.querySelector('.modal-close');
var feedbackForm = feedbackModal.querySelector('.feedback-form');
var feedbackName = feedbackModal.querySelector('.feedback-name');
var feedbackEmail = feedbackModal.querySelector('.feedback-email');
var feedbackMessage = feedbackModal.querySelector('.feedback-message');
var isStorageSupport = true;
var storageName = '';
var storageEmail = '';

try {
  storageName = localStorage.getItem('feedbackName');
  storageEmail = localStorage.getItem('feedbackEmail');
} catch (e) {
  isStorageSupport = false;
  console.log('Локальное хранилище не поддерживается');
};

feedbackButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  feedbackModal.classList.add('modal-show');
  if (storageName && storageEmail) {
    feedbackName.value = storageName;
    feedbackEmail.value = storageEmail;
    feedbackMessage.focus();
  } else {
  feedbackName.focus();
  }
});

feedbackForm.addEventListener('submit', function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackMessage.value) {
      evt.preventDefault();
      feedbackModal.classList.remove('modal-shake');
      feedbackModal.offsetWidth = feedbackModal.offsetWidth;
      feedbackModal.classList.add('modal-shake');
      } else {
    if (isStorageSupport) {
      localStorage.setItem('feedbackEmail', feedbackEmail.value);
      localStorage.setItem('feedbackName', feedbackName.value);
    }
  }
});

feedbackClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  feedbackModal.classList.remove('modal-show');
  feedbackModal.classList.remove('modal-shake');
});

var mapOpen = document.querySelector('.contacts-map-link');
var mapModal = document.querySelector('.modal-map');
var mapClose = mapModal.querySelector('.modal-close');

mapOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapModal.classList.add('modal-show');
});

mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapModal.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedbackModal.classList.contains('modal-show')) {
        feedbackModal.classList.remove('modal-show');
        feedbackModal.classList.remove('modal-shake');
    } else {
      if (mapModal.classList.contains('modal-show')) {
        mapModal.classList.remove('modal-show');
      }
    }
  }
});

var controls = document.querySelector('.slider-label-list');
var slider1 = document.querySelector('.slide-1');
var slider2 = document.querySelector('.slide-2');
var slider3 = document.querySelector('.slide-3');
var control1 = document.querySelector('label[for="control-1"]');
var control2 = document.querySelector('label[for="control-2"]');
var control3 = document.querySelector('label[for="control-3"]');
var radio1 = document.querySelector('.control-1');
var radio2 = document.querySelector('.control-2');
var radio3 = document.querySelector('.control-3');
var table = document.querySelector('.slide-1 .slider-feature');
controlsPosition = table.offsetHeight + 44;
controls.style.bottom = controlsPosition + 'px';
console.log(controlsPosition);

control1.addEventListener('click', function (evt) {
  var table = document.querySelector('.slide-1 .slider-feature');
  slider1.style.display = 'flex';
  slider2.style.display = 'none';
  slider3.style.display = 'none';
  controlsPosition = table.offsetHeight + 44;
  controls.style.bottom = controlsPosition + 'px';
  console.log(controlsPosition);
});

control2.addEventListener('click', function (evt) {
  var table = document.querySelector('.slide-2 .slider-feature');
  slider1.style.display = 'none';
  slider2.style.display = 'flex';
  slider3.style.display = 'none';
  controlsPosition = table.offsetHeight + 44;
  controls.style.bottom = controlsPosition + 'px';
  console.log(controlsPosition);
});

control3.addEventListener('click', function (evt) {
  var table = document.querySelector('.slide-3 .slider-feature');
  slider1.style.display = 'none';
  slider2.style.display = 'none';
  slider3.style.display = 'flex';
  controlsPosition = table.offsetHeight + 44;
  controls.style.bottom = controlsPosition + 'px';
  console.log(controlsPosition);
});

radio1.addEventListener('focus', function (evt) {
  var table = document.querySelector('.slide-1 .slider-feature');
  slider1.style.display = 'flex';
  slider2.style.display = 'none';
  slider3.style.display = 'none';
  controlsPosition = table.offsetHeight + 44;
  controls.style.bottom = controlsPosition + 'px';
  console.log(controlsPosition);
});

radio2.addEventListener('focus', function (evt) {
  var table = document.querySelector('.slide-2 .slider-feature');
  slider1.style.display = 'none';
  slider2.style.display = 'flex';
  slider3.style.display = 'none';
  controlsPosition = table.offsetHeight + 44;
  controls.style.bottom = controlsPosition + 'px';
  console.log(controlsPosition);
});

radio3.addEventListener('focus', function (evt) {
  var table = document.querySelector('.slide-3 .slider-feature');
  slider1.style.display = 'none';
  slider2.style.display = 'none';
  slider3.style.display = 'flex';
  controlsPosition = table.offsetHeight + 44;
  controls.style.bottom = controlsPosition + 'px';
  console.log(controlsPosition);
});
