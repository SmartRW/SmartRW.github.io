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
