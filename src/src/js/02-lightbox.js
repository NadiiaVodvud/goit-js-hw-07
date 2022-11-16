import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const container = document.querySelector('.gallery');

const picturesGallery = galleryItems
  .map(
    image =>
      `<a class="gallery__item" href=${image.original}><img class="gallery__image" src=${image.preview} alt=${image.description}/></a>`
  )
  .join('');

container.insertAdjacentHTML('afterbegin', picturesGallery);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
