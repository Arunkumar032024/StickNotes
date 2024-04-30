// Make variable to access buttons, dialogue and notes container, input-box
const createNoteBtn = document.querySelector("#createNote"),
    cancelBtn = document.querySelector("#cancel"),
    doneBtn = document.querySelector("#done"),
    dialougeContainer = document.querySelector(".dialouge-container"),
    notesContainer = document.querySelector(".notes-container"),
    inputbox = document.querySelector("#inputbox");


// To click on createNoteBtn 
createNoteBtn.addEventListener('click', () => {
    // show/hide the dialouge container 
    dialougeContainer.classList.toggle('display');
})
// To click on cancel btn
cancelBtn.addEventListener('click', () => {
    // hide the dialougeContainer
    dialougeContainer.classList.remove('display');
})

// To click on done btn
doneBtn.addEventListener('click', () => {
    // to check if the inputbox doesn't empty
    if (inputbox.value === '') {
        alert('Write something...');
    } else {
        // hide the dialougeContainer
        dialougeContainer.classList.remove('display');
        addNotes();
        inputbox.value = '';
    }

})


function addNotes() {
    // To create a span element 
    let span = document.createElement('span');
    span.innerText = inputbox.value;
    
    // set random background color for every span 
    span.style.background = `#${randomColor()}`;
    
    // set random rotate() value for every span
    span.style.transform = `rotate(${randomAngle()}deg`;
    notesContainer.appendChild(span);
    
    // save notes to localStorage
    saveData();
}

// To single click on span or note 
notesContainer.addEventListener('click', (e) => {
    if(e.target.tagName == "SPAN"){
        // To toggle the active class
        e.target.classList.toggle('active'); 
    }
})

// To double click on span or note 
notesContainer.addEventListener('dblclick', (e) => {
    if(e.target.tagName == "SPAN"){
        let result = confirm('Do u want to delete this note?');
        if (result) {
            e.target.remove();
            saveData();
            result = false;
        }
    }
})

// To save notes to localStorage 
function saveData(){
    localStorage.setItem('data', notesContainer.innerHTML);
}

// To show the saved notes in localStorage
function showData(){
    notesContainer.innerHTML = localStorage.getItem('data');
}

showData()

// To generate the random color 
function randomColor(){
    return `${Math.floor(Math.random() * 999999)}`;
}

// To generate the random angle 
function randomAngle(){
    return `${Math.floor(Math.random() * 6) - Math.floor(Math.random() * 6)}`;
}