const text = document.getElementById('text');
const texto = text.textContent;
const prog = texto +'...';
let idx = 5;

setInterval(writeText, 400);

function writeText() {
    text.innerHTML = prog.slice(0, idx);

    idx+=0.4;

    if(idx > prog.length+1) {
        idx = 5;
    } 
}
