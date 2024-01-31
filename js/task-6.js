'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector('#controls');
console.log(controls);
controls.classList.add('controls');
const input = document.querySelector('input');
input.classList.add('input');
const createBtn = document.querySelector('[data-create]');
createBtn.classList.add('create-button');
const destroyBtn = document.querySelector('[data-destroy]');
destroyBtn.classList.add('destroy-button');
const container = document.querySelector('#boxes');
console.log(container);
container.classList.add('container');
const boxesContainer = document.getElementById('boxes');


destroyBtn.addEventListener('mouseover', function () {
  destroyBtn.classList.add('hover-effect');
});

destroyBtn.addEventListener('mouseout', function () {
  destroyBtn.classList.remove('hover-effect');
});

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes(); 

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }

  changeBoxSizes();
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function changeBoxSizes() {
  const boxes = document.querySelectorAll('.box');
  let size = 30;

  boxes.forEach((box) => {
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    size += 10;
  });
}