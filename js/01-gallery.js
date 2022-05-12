import { galleryItems } from './gallery-items.js';

console.log(galleryItems);
 const gallery = document.querySelector('.gallery');

 function createGalleryItemsMarkup(galleryItems) {
     return galleryItems.map(({preview, original, description}) =>
     {return `<div class="gallery__item">
     <a class="gallery__link" href="${original}">
       <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
       />
     </a>
   </div>`}).join("");
 }

gallery.insertAdjacentHTML('beforeend', createGalleryItemsMarkup(galleryItems));

gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(evt) {
const imageLarge = evt.target.classList.contains('gallery__image');
if(!imageLarge) {
    return;
}
evt.preventDefault();

    const imageLargeLink = evt.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src= "${imageLargeLink}"
    alt="${evt.target.dataset.description}"/>`)

    instance.show();

    document.addEventListener ('keydown', evt=>{
        if (evt.code === "Escape") {
            instance.close()
        }
    });
}