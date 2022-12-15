// can make these into an object
// take as list items?
function add(num1, num2) {
    return +num1 + +num2
}
function subtract (num1, num2){
    return +num1 - +num2
}
function multiply(num1, num2) {
    return +num1 * +num2
}
function divide(num1, num2){
    return +num1 / +num2
}

let a = 0
let b = 0;
let addB = false;
let operation = '';

const screen = document.querySelector('.screenText');
screen.textContent = '';
const screenOp = document.querySelector('.operation');
screenOp.textContent = '';

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
equal.addEventListener('click', () => calculate());

const ce = document.querySelector('#clear');
ce.addEventListener('click', () => {
    a = 0;
    b = 0;
    addB = false;
    operation = '';
    screen.textContent = 0;
    screenOp.textContent = '';
});



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
    if (operation !== '') {
        // only change operations when we have an empty value
        return
    }
    operation = event.target.value;
    screenOp.textContent = operation;
    if (addB === false){
        // on press of any operation, start inputting values to b
        addB = true;
        return
    }
    // issue earlier where there was a calculate call here that forced b to be 0- a+b = a. a*b=0.
}

function calculate(){
    switch (operation){
        case '+':
            a = add(a, b);
            break;
        case '-':
            a = subtract(a, b);
            break;
        case '*':
            a = multiply(a, b);
            break;
        case '/':
            a = divide(a, b);
            break;
    }
    operation = '';
    screenOp.textContent = '';
    screen.textContent = a;
    b = 0; //reset b and keep adding to b
}

