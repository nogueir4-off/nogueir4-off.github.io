const addBtn = document.getElementById('add');

const notes = JSON.parse(localStorage.getItem('notes'));

if(notes) {
    notes.forEach(note => {
        addNewNote(note);
    });
}

addBtn.addEventListener('click', () => {
    addNewNote();
});

function addNewNote(text = "") {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
        <div class="notes">
            <div class="tools">
                <small class="animation-font"></small>
                <button class="fontLess"><i class="fas fa-font"></i></button>
                <button class="fontMore"><i class="fas fa-font"></i></button>
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="main ${text ? '' : 'hidden'}"></div>
            <textarea id="font" class="${text ? 'hidden' : ''}"></textarea>   
        </div>
    `;

    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete');
    const fontBtn = note.querySelector('.fontMore')
    const fontLessBtn = note.querySelector('.fontLess')

    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');
    const small = note.querySelector('small');

    textArea.value = text;
    main.innerHTML = marked(text);

    fontBtn.addEventListener('click', () => {
        small.innerHTML = '';
        const estilos = window.getComputedStyle(textArea, null);
        const tamanho = estilos.getPropertyValue('font-size');
        console.log(tamanho)

        modfont('19.2px', '25px');
        modfont('25px', '30px');
        modfont('30px', '35px');
        modfont('35px', '40px');
        modfont('40px', '45px');
        
        if (tamanho == '45px') {
            small.style.animation == ''
            small.innerHTML = 'Maximum font size';
                
            if(small.style.animation == ''){
                small.style.animation = 'fade 2s';

            } else if(small.style.animation = 'fade 2s'){
                small.innerHTML = 'Maximum font size';
                small.style.animation = '';
            }
        };

        function modfont(n1, n2){
            if (tamanho == n1){
                textArea.style.fontSize = n2;
            }
        }
    });

    fontLessBtn.addEventListener('click', () => {
        small.innerHTML = '';
        const estilos = window.getComputedStyle(textArea, null);
        const tamanho = estilos.getPropertyValue('font-size');
        console.log(tamanho)

        modfont('15px', '10px');
        modfont('19.2px', '15px');
        modfont('25px', '19.2px');
        modfont('30px', '25px');
        modfont('35px', '30px');
        modfont('40px', '35px');
        modfont('45px', '40px');
        
        if (tamanho == '10px') {
            small.style.animation == ''
            small.innerHTML = 'Minimum font size';
                
            if(small.style.animation == ''){
                small.style.animation = 'fade 2s';

            } else if(small.style.animation = 'fade 2s'){
                small.innerHTML = 'Minimum font size';
                small.style.animation = '';
            }
        };

        function modfont(n1, n2){
            if (tamanho == n1){
                textArea.style.fontSize = n2;
            }
        }
    });

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });

    deleteBtn.addEventListener('click', () => {
        note.remove();

        updateLS()
    });

    textArea.addEventListener('input', (e) => {
        const {value} = e.target;

        main.innerHTML = marked(value);

        updateLS()
    });

    document.body.appendChild(note);
}

function updateLS() {
    const notesText = document.querySelectorAll('textarea');

    const notes = [];

    notesText.forEach(note => {
        notes.push(note.value);
    });

    localStorage.setItem('notes', JSON.stringify(notes));
}
