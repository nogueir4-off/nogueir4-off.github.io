const btnSearch = document.getElementById("btnSearch");
const animeNameEl = document.getElementById("animeName");

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
            console.log(result);
            animeNameEl.innerHTML = `${result.docs[0].title_english}`
    });
}
