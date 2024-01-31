'use strict';

const loginForm = document.querySelector(".login-form");
console.log(loginForm);
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const btnSubmit = document.querySelector('button');
const label = document.querySelector('label');


//console.log(emailInput);

emailInput.classList.add('email');
passwordInput.classList.add('password');
btnSubmit.classList.add('form-submit');
label.classList.add('label');


btnSubmit.addEventListener('mouseover', function () {
	btnSubmit.classList.add('hover-effect');
});

btnSubmit.addEventListener('mouseout', function () {
	btnSubmit.classList.remove('hover-effect');
});

emailInput.addEventListener('mouseover', function () {
	emailInput.classList.add('hover-effect');
});

emailInput.addEventListener('mouseout', function () {
	emailInput.classList.remove('hover-effect');
});

passwordInput.addEventListener('mouseover', function () {
	passwordInput.classList.add('hover-effect');
});

passwordInput.addEventListener('mouseout', function () {
	passwordInput.classList.remove('hover-effect');
});

emailInput.addEventListener('focus', function () {
	this.setAttribute('placeholder', 'Enter your email');
});

emailInput.addEventListener('blur', function () {
	this.removeAttribute('placeholder');
});

passwordInput.addEventListener('focus', function () {
	this.setAttribute('placeholder', 'Enter your password');
});

passwordInput.addEventListener('blur', function () {
	this.removeAttribute('placeholder');
});

emailInput.addEventListener('input', function () {
	if (this.value.trim() !== '') {
		this.removeAttribute('placeholder');
	}
});

passwordInput.addEventListener('input', function () {
	if (this.value.trim() !== '') {
		this.removeAttribute('placeholder');
	}
});

loginForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
	event.preventDefault();

	const email = this.elements.email.value.trim();
	const password = this.elements.password.value.trim();

	if (email === "" || password === "") {
		alert("All form fields must be filled in");
		return;
	}

	const loginData = {
		email: email,
		password: password,

	}

	console.log(loginData);
	this.reset();
}
