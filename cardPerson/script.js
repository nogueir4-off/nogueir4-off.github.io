const btn = document.querySelector('.buttonGen button');
const container = document.querySelector('.container');

btn.addEventListener('click', () => {
    generateName()
})


// function genName() {
//     return fetch("https://randomuser.me/api/?nat=us,dk,fr,gb")
//         .then((res) => res.json())
//         .then((result) => {
//             return result.results[0].name.first + ' ' + result.results[0].name.last 
//     })
// }

// function generateName() {
//     let fetchRes = fetch("https://randomuser.me/api/?nat=us,dk,fr,gb");
//         fetchRes.then(res => 
//             res.json()).then(data => { 
//                 console.log(data.results[0].name.first + ' ' + data.results[0].name.last)
//             }) 
// }

async function generateName() {
    const resp = await fetch("https://randomuser.me/api/?nat=us,dk,fr,gb");
    const data = await resp.json();
    console.log(data.results);
    name = data.results[0].name.first + ' ' + data.results[0].name.last;
    // img = data.results[0].picture.large;
    // city = data.results[0].location.city;
    // gender = data.results[0].gender;
    genImg(name)
} 

function genImg(name) {
    nameOne = name.split(" ")[0] + "+" + name.split(" ")[1]
    const request = `https://avatars.dicebear.com/api/avataaars/${nameOne}.svg?mood[]=happy`
    fetch(request)
    .then((res) => res)
    .then((data) => {
        createObject(name, data.url);
    })
}

function createObject(name, image) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <img src="${image}">
    <h1>${name}</h1>
    `
    container.appendChild(card);
}