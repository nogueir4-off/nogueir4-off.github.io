const generate = document.querySelector('link');
const btn = document.getElementById('btnGen');
const text = document.querySelector('.text');
const btnCopy = document.getElementById('btnCopy');

btnCopy.addEventListener('click', () => {
    console.log(text.textContent);
    copyToClipboard(text.textContent)
})

btn.addEventListener('click', () => {
    generateBored();
    btn.children[0].classList.add('spin-animation');
    setTimeout(function(){
        btn.children[0].classList.remove('spin-animation');
    }, 500);
})

const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected =
        document.getSelection().rangeCount > 0
        ? document.getSelection().getRangeAt(0)
        : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
    }
};

function generateBored() {
    url =  "https://www.boredapi.com/api/activity";
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        text.innerHTML = data.activity
    })
}