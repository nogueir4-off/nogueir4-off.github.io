const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const textEmail = document.getElementById('textEmail');
const textarea = document.querySelector('textarea');
const button = document.querySelector('.form button');

form.addEventListener('submit', e => {
	e.preventDefault();
	
    checkInputs();
    const emailValue = email.value.trim();
    if(isEmail(emailValue) && username.value.trim() != "" && textEmail.value.trim() != "") {
		button.style.transition = "all 0.8s ease";
		button.style.backgroundColor = "#00b88a";
		button.style.border = "2px solid #00b88a";
		button.innerHTML = "Enviado <i class='fas fa-check-circle'></i>"
		sendEmail();
    }
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const textValue = textEmail.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'O nome de usuário não pode ficar em branco');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'O email não pode ficar em branco');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'O email não é valido');
	} else {
		setSuccessFor(email);
	}
	
	if(textValue === '') {
		setErrorFor(textEmail, 'O conteudo não pode ficar em branco');
	} else {
		setSuccessFor(textEmail);
	}
	
}

function sendEmail() {
	const email = document.getElementById('email');
	const name = document.getElementById('username');
	const content = document.getElementById('textEmail');
	
    if(content.value.trim() != "") {
		Email.send({
		Host: "smtp.gmail.com",
		Username : "ecologicalteamsend@gmail.com",
		Password : "Mari.1981",
		To : 'ecologicalteam@protonmail.com',
		From : "ecologicalteamsend@gmail.com",
		Subject : "Contact us",
		Body : `Nome - ${name.value}<br> Email - ${email.value}<br><br>${content.value}`,
		}).then(
			message => console.log('mail sent successfully')
		);
    }
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
