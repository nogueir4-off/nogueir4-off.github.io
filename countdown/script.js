const input = document.querySelector('input');
const form = document.querySelector('form');
const day = document.querySelector('.day h1');
const hour = document.querySelector('.hour h1');
const minute = document.querySelector('.minute h1');
const second = document.querySelector('.second h1');

form.addEventListener('change', (e) => {
	calc(e.target.value);
});
var startTimer = '';		

function calc(date) {
	clearInterval(startTimer);
	dateInput = new Date(date)
	dateNow = new Date()

	var delta = Math.abs(dateInput - dateNow) / 1000;

	var days = Math.floor(delta / 86400);
	delta -= days * 86400;

	var hours = Math.floor(delta / 3600) % 24;
	delta -= hours * 3600;

	var minutes = Math.floor(delta / 60) % 60;
	delta -= minutes * 60;

	var seconds = delta % 60;
	seconds = seconds.toFixed(0)
	if(dateNow >= dateInput) {
		day.innerHTML = "N";
		hour.innerHTML = "O";
		minute.innerHTML = "N";
		second.innerHTML = "E";
	}else {
		day.innerHTML = days;
		hour.innerHTML = hours;
		minute.innerHTML = minutes;
		second.innerHTML = seconds;
	}
	startTimer = setInterval(function() { calc(date); }, 1000);
}
