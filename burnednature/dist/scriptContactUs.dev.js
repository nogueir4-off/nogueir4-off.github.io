"use strict";

var form = document.getElementById('form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var textEmail = document.getElementById('textEmail');
var textarea = document.querySelector('textarea');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkInputs();
  var emailValue = email.value.trim();

  if (isEmail(emailValue) && username.value.trim() != "" && textEmail.value.trim() != "") {
    sendEmail();
  }
});

function checkInputs() {
  // trim to remove the whitespaces
  var usernameValue = username.value.trim();
  var emailValue = email.value.trim();
  var textValue = textEmail.value.trim();

  if (usernameValue === '') {
    setErrorFor(username, 'O nome de usuário não pode ficar em branco');
  } else {
    setSuccessFor(username);
  }

  if (emailValue === '') {
    setErrorFor(email, 'O email não pode ficar em branco');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'O email não é valido');
  } else {
    setSuccessFor(email);
  }

  if (textValue === '') {
    setErrorFor(textEmail, 'O conteudo não pode ficar em branco');
  } else {
    setSuccessFor(textEmail);
  }
}

function sendEmail() {
  var email = document.getElementById('email');
  var name = document.getElementById('username');
  var content = document.getElementById('textEmail');

  if (content.value.trim() != "") {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "ecologicalteamsend@gmail.com",
      Password: "Mari.1981",
      To: 'ecologicalteam@protonmail.com',
      From: "ecologicalteamsend@gmail.com",
      Subject: "Contact us",
      Body: "Nome - ".concat(name.value, "<br> Email - ").concat(email.value, "<br><br>").concat(content.value)
    }).then(function (message) {
      return alert("mail sent successfully");
    });
  }
}

function setErrorFor(input, message) {
  var formControl = input.parentElement;
  var small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  var formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}