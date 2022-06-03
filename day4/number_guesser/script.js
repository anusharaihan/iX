const input = document.getElementById('input');
const button = document.getElementById('button');
const output = document.getElementById('output')
button.addEventListener('click', (event) => {
    output.innerHTML='';

    const randomNumber = Math.round(Math.random() * 10);
    
    const element = document.createElement('div');
    element.classList.add('alert');

    debugger;
    
    if (input.value == randomNumber) {
        element.classList.add('alert-success');
        element.innerHTML = 'You Guessed Correctly The Number Was ' + randomNumber
    } else {
        element.classList.add('alert-danger');
        element.innerHTML = 'You Guessed Incorrectly The Number Was ' + randomNumber
    }

    output.appendChild(element);
})