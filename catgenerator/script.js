const cat_result = document.getElementById('cat_result');
const cat_btn = document.getElementById('cat_btn');
const fact = document.getElementById('fact');

cat_btn.addEventListener('click', () => {
    getRandomCat();
    getFact();
})

function getRandomCat() {
    fetch('https://aws.random.cat/meow')
        .then(res => res.json())
        .then(data => {
            cat_result.innerHTML = `<img src="${data.file}"/>`
        })
}

function getFact() {
    fetch('https://cat-fact.herokuapp.com/facts')
        .then((res) => res.json())
        .then((data) => {
            let obj_keys = Object.keys(data.all)
            let ran_key = obj_keys[Math.floor(Math.random() * obj_keys.length)];
            let cat_str = data.all[ran_key].text;
            console.log(cat_str)
            fact.innerHTML = `${cat_str}`
        })
}

function randomStr() {
    var obj_keys = Object.keys(data.all)
}