const book = document.querySelector('input');
const form = document.querySelector('form');
const btn = document.querySelector('button');
const image = document.querySelector('.image');
const boooks = document.querySelector('.boooks');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	if(book.value) {
		searchBook(book.value)
	}
});

btn.addEventListener('click', (e) => {
	if(book.value) {
		searchBook(book.value)
	}
});

function searchBook(bookName) {
	fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`)
	.then((res) => res.json())
	.then((data) => createBook(data))
}

function createBook(books) {
	for(i=0; i<10;i++){
		var imageInner;
		var descriptInner;

		bookMain = document.createElement("div");
		bookMain.classList.add('bookMain');

		if (books.items[i].volumeInfo.imageLinks){
		    console.log("your key or value exists!");
		    imageInner = books.items[i].volumeInfo.imageLinks.smallThumbnail;
		} else {
			imageInner = "./Sem título.png";
		}

		if (books.items[i].searchInfo){
		    console.log("your key or value exists!");
		    descriptInner = books.items[i].searchInfo.textSnippet;
		} else {
			descriptInner = "No descript ;("
		}

		if (books.items[i].volumeInfo.publishedDate){
		    console.log("your key or value exists!");
		    dateInner = books.items[i].volumeInfo.publishedDate.split("-").join("/");
		} else {
			dateInner = "Date not found ;("
		}

		if(!(books.items[i].volumeInfo.publishedDate) && !(books.items[i].searchInfo)) {
			break;
		}

		bookMain.innerHTML = `
			<div class="title"><h1>${books.items[i].volumeInfo.title}</h1></div>
			<div class="container">
				<div class="imageBook"><img src="${imageInner}" alt="BookImage"></div>	
				<div class="descript"><p>${descriptInner}</p></div>
			</div>
			<div class="infos">
				<div class="author">
					<p>Authors: ${books.items[i].volumeInfo.authors}</p>
				</div>
				<div class="date">
					<p>Published date: ${dateInner}</p>
				</div>
			</div>
			<div class="button"><a href="${books.items[i].saleInfo.buyLink}"><button>BUY</button></a></div>
		`
		image.style.display= "none";
		document.body.appendChild(bookMain);
	}
}

