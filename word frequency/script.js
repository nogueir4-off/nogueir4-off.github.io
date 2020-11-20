const btn = document.getElementById('count');
const rnd = document.getElementById('random');
const txt = document.getElementById('txt');
const words = document.querySelector('.words');
const title = document.querySelector('.title');

btn.addEventListener('click', (e) => {
	if(document.querySelector('.result')) {
		title.style.display = "none";
		while(document.querySelector('.result')) {
			document.querySelector('.result').remove();
		}
	}
	if(txt.value.trim() != "") {
		title.style.display = "flex";
		organizeText(txt.value.trim());
		txt.value = "";
	}
});

rnd.addEventListener('click', (e) => {
	genTxt();
});

function organizeText(text) {
	text = text.split(" ");
	while(text.length != 0) {
		for(i=0;i < text.length;i++) {
			count = 0;
			for(l in text) {
				if(text[i] == text[l]) {
					count += 1;
				}
			} 
			create(text[i], count);
	        let buscarPor = text[i];
			let indice = text.indexOf(buscarPor);
			while(indice >= 0){
			    text.splice(indice, 1);
			    indice = text.indexOf(buscarPor);
			}
		}
	}
}

function create(text, num) {
	word = document.createElement("div");
	word.classList.add("result");
	word.innerHTML = `
	<div class="resultNumber"><h1>${num}</h1></div>
	<div class="resultWord"><h1>${text}</h1></div>
	`;
	words.appendChild(word);
}


function genTxt() {
	fetch('https://api.chucknorris.io/jokes/random')
	.then((res) => res.json())
	.then((data) => txt.value = data.value)
}