const img = document.querySelector('.qr-code img');
const btn = document.querySelector('.create button'); //
const input = document.querySelector('input');
const qr = document.querySelector('.qr-code'); //
const a = document.querySelector('a');
const canvas = document.querySelector('canvas');
const btnSave = document.getElementById('save');
const btnClose = document.getElementById('close'); //

btn.addEventListener('click', () => {
	if(input.value){
		createQr(input.value)
	}
});

btnSave.addEventListener('click', (e) => {
	saveImg()
});

btnClose.addEventListener('click', (e) => {
	qr.classList.remove('show');
});

function createQr(txt) {
	text = txt.split(" ").join("%20")
	img.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&format=svg&data=${text}`;
	img.crossOrigin = 'Anonymous';
	qr.classList.add('show');
}

function saveImg() {
    var img = document.querySelector("img");
    var canvas = document.getElementById('canvas');

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

	var link = document.createElement('a');
  	link.download = 'qrcode.jpeg';
  	link.href = document.getElementById('canvas').toDataURL('image/jpeg', 1.0)
  	link.click();
}





	// var link = document.createElement('a');
 //  	link.download = 'filename.png';
 //  	link.href = document.getElementById('canvas').toDataURL()
 //  	link.click();