const open = document.getElementById('sideBar');
const cont = document.querySelector('.container');
const painel = document.querySelector('.tableLeft');
const close = document.getElementById('sideBarClose');

close.addEventListener('click', () => {
    cont.classList.remove('show');
    painel.style.left = '-500px';
})

open.addEventListener('click', () => {
    cont.classList.add('show');
    painel.style.left = '0px';
})