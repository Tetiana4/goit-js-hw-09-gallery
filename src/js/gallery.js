
import galleryItems from "./app";

// Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.
import galleryItems from "./app.js";
const galleryBox = document.querySelector('.js-gallery');
const galleryMarkup = createGallery(galleryItems);

galleryBox.insertAdjacentHTML('beforeend', galleryMarkup);

function createGallery(cards) {
   return cards.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
    <a class="gallery__link"
        href= "#">
    <img class="gallery__image"
        src= "${preview}"
        data-source= "${original}"
        alt= "${description}"/>
    </a>
    </li>`;
  }).join('');
 
  // console.log(markup)
}
 
galleryBox.addEventListener('click', onGalleryBoxClick)

// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.

const modalOpen = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox__image')

function onGalleryBoxClick(e) {

  if (!e.target.classList.contains('gallery__image')) {
    return
  } else {

    // Открытие модального окна по клику на элементе галереи.
  
    modalOpen.classList.add('is-open');

    lightboxImg.src = e.target.dataset.source;
    lightboxImg.alt = e.target.alt;
  }
}

function closeModal(e) {
  modalOpen.classList.remove('is-open');

  // Очистка значения атрибута src элемента img.lightbox__image. 

  lightboxImg.src = "";
  lightboxImg.alt = "";
}
// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].

const buttonClose = document.querySelector('.lightbox__button');
// console.log(buttonClose);

buttonClose.addEventListener('click', closeModal);