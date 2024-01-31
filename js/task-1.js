'use strict';
const categoriesList = document.getElementById('categories');
categoriesList.classList.add('categories-list');

const items = categoriesList.querySelectorAll('.item');
items.forEach(item => {
	const category = item.querySelector('ul');
	const categoryItems = item.querySelectorAll('ul li');

	category.classList.add('category');

	categoryItems.forEach(categoryItem => {
		categoryItem.classList.add('category-item');
	});
});
console.log('Number of categories: ', items.length);

const categories = document.querySelectorAll('.item');

items.forEach(item => {
	const categoryTitle = item.querySelector('h2');
	categoryTitle.classList.add('category-title');
	const categoryItemsTotal = item.querySelectorAll('ul li').length;
	console.log('Category:', categoryTitle.textContent);
	console.log('Elements:', categoryItemsTotal);

});
