import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) =>
    {return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image"
         src="${preview}" 
         alt="${description}" />
      </a>`}).join("");
}

gallery.insertAdjacentHTML('beforeend', createGalleryItemsMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData:'alt',
    captionDelay:250,
});