// const sub = document.getElementById('form');
// sub.addEventListener('submit', e => {
// 	e.preventDefault();
// 	sendEmail();
// });
// function sendEmail() {
// 	const email = document.getElementById('email');
// 	const name = document.getElementById('username');
// 	const content = document.getElementById('textEmail');
//     if(content.value.trim() != "") {
// 		Email.send({
// 		Host: "smtp.gmail.com",
// 		Username : "sorteioinsta240@gmail.com",
// 		Password : "Mari.1981",
// 		To : 'ecologicalteam@protonmail.com',
// 		From : "sorteioinsta240@gmail.com",
// 		Subject : "Contact us",
// 		Body : `Nome - ${name.value}<br> Email - ${email.value}<br><br>${content.value}`,
// 		}).then(
// 			message => alert("mail sent successfully")
// 		);
//     }
// }
// function sendIs(email, name, text) {
// 	Email.send({
// 	Host: "smtp.gmail.com",
// 	Username : "sorteioinsta240@gmail.com",
// 	Password : "Mari.1981",
// 	To : 'ecologicalteam@protonmail.com',
// 	From : "sorteioinsta240@gmail.com",
// 	Subject : "Contact us",
// 	Body : `Nome - ${name}<br> Email - ${email}<br><br>${text}`,
// 	}).then(
// 		message => alert("mail sent successfully")
// 	);
// }
"use strict";