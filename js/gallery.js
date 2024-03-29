'use strict';
const images = [
	{
		preview:
			'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
		original:
			'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
		description: 'Hokkaido Flower',
	},
	{
		preview:
			'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
		original:
			'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
		description: 'Container Haulage Freight',
	},
	{
		preview:
			'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
		original:
			'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
		description: 'Aerial Beach View',
	},
	{
		preview:
			'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
		original:
			'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
		description: 'Flower Blooms',
	},
	{
		preview:
			'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
		original:
			'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
		description: 'Alpine Mountains',
	},
	{
		preview:
			'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
		original:
			'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
		description: 'Mountain Lake Sailing',
	},
	{
		preview:
			'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
		original:
			'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
		description: 'Alpine Spring Meadows',
	},
	{
		preview:
			'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
		original:
			'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
		description: 'Nature Landscape',
	},
	{
		preview:
			'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
		original:
			'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
		description: 'Lighthouse Coast Sea',
	},
];
//console.log(images);

const gallery = document.querySelector('.gallery');
console.log(gallery);

const fragment = document.createDocumentFragment();

images.forEach(({ preview: smallImage, original: largeImage, description: imageAlt }) => {
	const galleryItem = document.createElement('li');
	galleryItem.classList.add('gallery-item');

	const galleryLink = document.createElement('a');
	galleryLink.classList.add('gallery-link');
	galleryLink.href = largeImage;

	const img = document.createElement('img');
	img.classList.add('gallery-image');
	img.src = smallImage;
	img.dataset.source = largeImage;
	img.alt = imageAlt;
	img.style.width = '360px';
	img.style.height = '200px';

	galleryLink.appendChild(img);
	galleryItem.appendChild(galleryLink);
	fragment.appendChild(galleryItem);
});

gallery.appendChild(fragment);
let currentModal;

gallery.addEventListener('click', (event) => {
	event.preventDefault();

	const clickedGalleryItem = event.target.closest('.gallery-item');

	if (clickedGalleryItem) {
		const clickedImage = clickedGalleryItem.querySelector('img');
		const largeImageSrc = clickedImage.dataset.source;
		//console.log('Clicked:', event.target);
		//console.log('Clicked:', event.currentTarget);
		console.log('Link to the large image:', largeImageSrc);

		currentModal = basicLightbox.create(
			`<div class="modal">
				<img src="${largeImageSrc}" alt="${clickedImage.alt}" width="1112" height="640">
			</div>`,
			{
				onShow: () => {
					document.addEventListener('keyup', handleKeyUp);
				},
				onClose: () => {
					document.removeEventListener('keyup', handleKeyUp);
				},
			}
		);

		currentModal.show();
	}
});
function handleKeyUp(event) {
	if (event.code !== 'Escape' || !currentModal) {
		return;
	}
	currentModal.close();
}

