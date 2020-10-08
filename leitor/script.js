const pause = document.getElementById('pause');
const play = document.getElementById('play');
const deleta = document.getElementById('delete');
const inputTxt = document.getElementById('text');
const small = document.querySelector('small');
//buttons 
const atual = document.getElementById('number');
const more = document.getElementById('more');
const less = document.getElementById('less');
//voice
const to_speak = new SpeechSynthesisUtterance();

play.addEventListener('click', () => {
	messageError('insert text to read');
	start(inputTxt.value);
}) 

deleta.addEventListener('click', () => {
	messageError('no text to delete');
	delet();
	atual.innerHTML = 1;
}) 

pause.addEventListener('click', () => {
	messageError('no text to restart');
	pausar(inputTxt.value);
}) 

more.addEventListener('click', () => {
	console.log(atual);
	moreNumber();
})

less.addEventListener('click', () => {
	console.log(atual);
	lessNumber();
})

function moreNumber() {
	var num = atual.textContent;
	if(num == 10) {
		atual.innerHTML = num
	} else {
		var soma = parseInt(num) + 1;
		atual.innerHTML = soma;
	};
}

function lessNumber() {
	var num = atual.textContent;
	if(num == 1) {
		atual.innerHTML = num
	} else {
		var sub = parseInt(num) - 1;
		atual.innerHTML = sub;
	}
}

function pausar(msg) {
	speechSynthesis.cancel();

	const to_speak = new SpeechSynthesisUtterance(msg);
	to_speak.lang = "pt-BR";
	to_speak.volume = 10;
	to_speak.rate = atual.textContent;
	speechSynthesis.speak(to_speak);
	console.log(to_speak);
}

function start(msg) {
	const to_speak = new SpeechSynthesisUtterance(msg);
	to_speak.lang = "pt-BR";
	to_speak.volume = 10;
	to_speak.rate = atual.textContent;
	speechSynthesis.speak(to_speak);
	console.log(to_speak);
}

function delet() {
	speechSynthesis.cancel();
	inputTxt.value = '';
}

function messageError(msg) {
	if(inputTxt.value == '') {
		small.style.animation == ''
		small.innerHTML = msg;
			
		if(small.style.animation == ''){
			small.style.animation = 'fade 2s';

		} else if(small.style.animation = 'fade 2s'){
			small.innerHTML = msg;
			small.style.animation = '';
		}
	};
}
