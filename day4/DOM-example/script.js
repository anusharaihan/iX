// console.log(document)

// const element = document.getElementById('yeah');

// const anElem = element.parentElement.parentElement.children[0].children[2];

// //const cells = document.getElementsByClassName('first');
// //const cells = document.getElementsByName('second');
// //element.classList.add('p-5');

// const containers= document.getElementsByClassName('container');

// const newElem = document.createElement('div')
// newElem.innerHTML = 'I am a new div';

// const container = containers[0];

// container.appendChild(newElem);

//container.setAttribute('label', 'howdy')
//container.removeAttribute('label');

//console.log(anElem);

const form = document.getElementById('form');
const nameInput = document.getElementById('name-input');
const surnameInput = document.getElementById('surname-input');
const button = document.getElementById('button');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log (nameInput.value + " " + surnameInput.value);
    nameInput.value = '';
    surnameInput.value='';
    localStorage.clear();
    //console.log(event);
});


 nameInput.addEventListener('keypress', (event) => {
    localStorage.setItem('name', event.target.value);
 });

 nameInput.addEventListener('change', (event) => {
    localStorage.setItem('name', event.target.value);
 });

 surnameInput.addEventListener('keypress', (event) => {
    localStorage.setItem('surname', event.target.value);
});

surnameInput.addEventListener('change', (event) => {
    localStorage.setItem('surname', event.target.value);
 });


// form.addEventListener('click', (event) => {
//     console.log('Form Click', event);
// });

// button.addEventListener('click', (event) => {
//     event.stopPropagation();  //stops propagation, stop button click from also being a form click
//     console.log('Button click', event);
// });