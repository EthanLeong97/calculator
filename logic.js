// can make these into an object
// take as list items?
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
// TODO decide how to deal with rounding
const divide = (a, b) => a / b;

const screen = document.querySelector('.screenText');
screen.textContent = '';

const one = document.querySelector('#one');
one.addEventListener('click', event => inputNumber(event));
const two = document.querySelector('#two');
two.addEventListener('click', event => inputNumber(event));
const three = document.querySelector('#three');
three.addEventListener('click', event => inputNumber(event));
const four = document.querySelector('#four');
four.addEventListener('click', event => inputNumber(event));
const five = document.querySelector('#five');
five.addEventListener('click', event => inputNumber(event));
const six = document.querySelector('#six');
six.addEventListener('click', event => inputNumber(event));
const seven = document.querySelector('#seven');
seven.addEventListener('click', event => inputNumber(event));
const eight = document.querySelector('#eight');
eight.addEventListener('click', event => inputNumber(event));
const nine = document.querySelector('#nine');
nine.addEventListener('click', event => inputNumber(event));
const zero = document.querySelector('#zero');
zero.addEventListener('click', event => inputNumber(event));

const mul = document.querySelector('#multiply');
mul.addEventListener('click', event => operate(event));
const div = document.querySelector('#divide');
div.addEventListener('click', event => operate(event));
const plus = document.querySelector('#plus');
plus.addEventListener('click', event => operate(event));
const minus = document.querySelector('#minus');
minus.addEventListener('click', event => operate(event));

const equal = document.querySelector('#equal');
equal.addEventListener('click', event => calculate(event));

const ce = document.querySelector('#clear');
ce.addEventListener('click', () => {
    a = 0;
    b = 0;
    addB = false;
    operation = '';
    screen.textContent = 0;
});

let a = 0
let b = 0;
let addB = false;
let operation = '';

function inputNumber(event){
    input = +event.target.value;
    if (addB === false){ //note that !addB flips the value so first iteration would return true
        a = +a * 10 + input;
        screen.textContent = a;
    }
    else if (addB === true){
        b = +b * 10 + input;
        screen.textContent = b;
    }
}

function operate(event){
    operation = event.target.value;
    if (addB === false){
        // on press of any operation, start inputting values to b
        addB = true;
    }
    else if (addB === true){
        calculate(); //set a to computed value
        screen.textContent = a;
        b = 0; //reset b and keep adding to b
    }
}

function calculate(){
    switch (operation){
        case '+':
            a = add(a, b);
            // operation = '';
            break;
        case '-':
            a = subtract(a, b);
            // operation = '';
            break;
        case '*':
            a = multiply(a, b);
            // operation = '';
            break;
        case '/':
            a = divide(a, b);
            // operation = '';
            break;
    }
}