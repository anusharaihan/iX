const form = document.getElementById('form');

const loanInput = document.getElementById('loan-input');
const interestInput = document.getElementById('interest-input');
const yearsInput = document.getElementById('years-input');

const output = document.getElementById('output');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inBrackets = 1 + (interestInput.value/100);
    const outBrackets = Math.pow(inBrackets, yearsInput.value);
    const finalAmount = loanInput.value * outBrackets;
    
    output.innerHTML = finalAmount.toFixed(2);
    output.classList.remove('hide');
});