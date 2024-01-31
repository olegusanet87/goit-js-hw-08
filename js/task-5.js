'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector('.widget');
console.log(widget);
const textWidget = widget.querySelector('p');
const colorSpan = widget.querySelector('.color');
const changeColorButton = widget.querySelector('.change-color');
const body = document.body;

textWidget.classList.add('text-widget');

changeColorButton.addEventListener('click', function () {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;

});








