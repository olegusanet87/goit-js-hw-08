'use strict';

const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.classList.add('name-input');
nameOutput.classList.add('name-output');
//console.log (nameInput);
//console.log(nameOutput);



nameInput.addEventListener('input', function () {

	const trimName = nameInput.value.trim();
	nameOutput.textContent = trimName === '' ? 'Anonymous' : trimName;
});
