const text = document.getElementById('text')
const result = document.getElementById('result')
const resultCode = document.getElementById('resultCode')
const button = document.querySelector('button');

const LSitem = JSON.parse(JSON.stringify(localStorage.getItem('Text')));

if(LSitem) {
    inner(LSitem)
}

text.addEventListener('input', (e) => {
    const {value} = e.target;
    updateLS(value)
    inner(value)
});

function inner(txt) {
    text.innerHTML = txt;
    resultCode.innerHTML = marked(txt);
    result.innerHTML = marked(txt);
}

function copyPreview() {
    item = document.createElement('textarea');
    item.classList.add('copiar')
    item.innerHTML = result.textContent;
    document.body.appendChild(item)
    item.select()
    document.execCommand("copy");
    item.remove();
}

function copyCode() {
    item = document.createElement('textarea');
    item.classList.add('copiar')
    item.innerHTML = resultCode.textContent;
    document.body.appendChild(item)
    item.select()
    document.execCommand("copy");
    item.remove();
}

function updateLS(val) {
    localStorage.setItem('Text', val)
}