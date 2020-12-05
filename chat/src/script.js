const btnLogin = document.getElementById('login');
const inputLogin = document.getElementById('user');

btnLogin.addEventListener('click', () => {
    const image = document.getElementById('imgLogin');
    const error = document.querySelector('.username .far.fa-times-circle')
    const check = document.querySelector('.username .fas.fa-check-circle')
    if(inputLogin.value.trim() == "") {
        image.src = '../images/image-login-fail.svg'
        check.style.display = 'none';
        error.style.display = 'flex';
    } else {
        image.src = '../images/image-login.svg'
        error.style.display = 'none';
        check.style.display = 'flex';
    }
}) 