const btnSearch = document.getElementById("btnSearch");

const animeName0 = document.getElementById("animeName0");
const animeName1 = document.getElementById("animeName1");
const animeName2 = document.getElementById("animeName2");

const animeNone0 = document.getElementById("animeNone0");
const animeNone1 = document.getElementById("animeNone1");
const animeNone2 = document.getElementById("animeNone2");

const animeNameZero = document.getElementById('animeNameZero');
const animeNoneZero = document.getElementById('animeNoneZero');

function previewFile() {
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}

btnSearch.addEventListener('click', () => {
    animeNoneZero.style.backgroundColor = '#60288d';
    animeNameZero.innerHTML = "Searching Anime Name..."
    animeNone0.style.display = "none";
    animeNone1.style.display = "none";
    animeNone2.style.display = "none";
    animeSearch();
})

function animeSearch() {
    var img = document.querySelector("img");
    var canvas = document.createElement("canvas");

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    fetch("https://trace.moe/api/search", {
        method: "POST",
        body: JSON.stringify({ image: canvas.toDataURL("image/jpeg", 0.8) }),
        headers: {"Content-Type": "application/json"},
    })
        .then((res) => res.json())
        .then((result) => {
            createAnimeName(animeNone0 ,animeName0, 0)
            animeNameZero.innerHTML = "Possibility";
            animeNoneZero.style.backgroundColor = 'white';
            if(result.docs[0].title_english != result.docs[1].title_english) {
                createAnimeName(animeNone1 ,animeName1, 1);
                animeNameZero.innerHTML = "Possibilities";
                if(result.docs[1].title_english != result.docs[2].title_english) {
                    createAnimeName(animeNone2 ,animeName2, 2);
                }
            }
                
            function createAnimeName(stringFlex, stringName, number) {
                stringName.innerHTML = `${result.docs[number].title_english}`;
                stringFlex.style.display = "flex";
            }
    });
}