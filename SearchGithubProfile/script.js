const form = document.querySelector('form');
const result = document.querySelector('.result');
const input = document.querySelector('input');

form.addEventListener('submit', function(e) {
	e.preventDefault()
	result.style.display = "none";
	if(document.querySelector('.info')) {
		document.querySelector('.info').remove();
	}
	profile(input.value)
});

function profile(user) {
	url = `https://api.github.com/users/${user}`;
	fetch(url)
	.then(res => res.json())
	.then(data => inner(data))
}

function inner(data) {
	if(data.login != undefined) {
		prof = document.createElement("div");
		prof.classList.add('info')
		prof.innerHTML = `
		<div class="block1">
			<img src="${data.avatar_url}" alt="imageProfile">
		</div>
		<div class="block2">
			<h6>${data.login}</h6>
			<h6>location: ${data.location}</h6>
			<h6>repos: ${data.public_repos}</h6>
			<h6>followers: ${data.followers}</h6>
			<h6>following: ${data.following}</h6>
			<h6><a href="${data.html_url}" target="_blank">click to acess</a></h6>
		</div>`
		result.style.display = "flex";
		result.appendChild(prof);
	}
}