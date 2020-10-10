const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');
const finishedEl = document.getElementById('fim');
const complimentEl = document.getElementById('compliment');
const eraserEl = document.getElementById('eraser');

const ctx = canvas.getContext("2d");

const blank = document.getElementById('blank');

let size = 20;
let isPressed = false
let color = 'black';
let x = undefined; 
let y = undefined;

canvas.addEventListener('mousedown', () => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mouseup', () => {
    isPressed = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

finishedEl.addEventListener('click', () => {
    if(isCanvasBlank(canvas)) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        canvas.style.backgroundColor = "#e5f5f5";
        complimentEl.innerHTML = '';
    } else {
        createStr();
    }
})

eraserEl.addEventListener('click', () => {
    ctx.clearTo(fillColor  )
})

function isCanvasBlank(canvas) {
    return !canvas.getContext('2d')
      .getImageData(0, 0, canvas.width, canvas.height).data
      .some(channel => channel !== 0);
}
  
function createStr() {  
    let compliments = ['pretty!!', 'beautiful!!', 'wonderful!!', 'perfect!!', 'incredible!!', 'amazing!!'];
    let word = compliments[Math.floor(Math.random()*compliments.length)];
    complimentEl.innerHTML = word;
    complimentEl.classList.add('compliment')
    canvas.style.backgroundColor = "white";
}

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

increaseBtn.addEventListener('click', () => {
    size += 5;

    if(size > 50) {
        size = 50;
    }

    updateSizeOnScreen();
});

decreaseBtn.addEventListener('click', () => {
    size -= 5;

    if(size < 5) {
        size = 5;
    } 

    updateSizeOnScreen();
});

colorEl.addEventListener('change', (e) => {
    color = e.target.value
})

clearEl.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    canvas.style.backgroundColor = "#e5f5f5";
    complimentEl.innerHTML = '';
    complimentEl.classList.remove('compliment')
})

function updateSizeOnScreen() {
    sizeEl.innerText = size;
}
