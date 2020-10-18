const btn = document.getElementById("btnSearch");
const name = document.getElementById("animeName");

btn.addEventListener("click", () => {
    console.log(btn.textContent);
    console.log(name.textContent);
    writeIs();
})

function writeIs() {
    if(true) {
        const texto = btn.textContent;
        const prog = texto +'...';
        let idx = texto.length;

        setInterval(writeText, 400);

        function writeText() {
            btn.innerHTML = prog.slice(0, idx);

            idx++;

            if(name.textContent != "Anime Name") {
                btn.innerHTML = "Search";
                return false
            }else if(idx > prog.length+1) {
                idx = texto.length;
        } 
    }
}
}

name.addEventListener('change', () => {
    name.innerHTML = "cucucu"
})