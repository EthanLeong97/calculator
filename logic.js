// can make these into an object
// take as list items?
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
// TODO decide how to deal with rounding
const divide = (a, b) => a / b;

// function operate(a, b, operator) {
//     if (operator === '+'){
//         return add(a, b)
//     }
//     else if (operator === '-'){
//         return subtract(a, b)
//     }
//     else if (operator === '*'){
//         return multiply(a, b)
//     }
//     else if (operator === '/'){
//         return divide(a, b)
//     }
// }

function inputNumber(event){
    input = event.target.value;

    // test if number exceeded max input
    if (a){
        let test = a.toString();
        if (test.length > 12) return false
    }
    if (b){
        let test = a.toString();
        if (test.length > 12) return false
    }

    if (addA){
        // input for a
        if (isNaN(a)){
            a = input;
            screen.textContent = a;
        }
        else {
            a = a * 10 + +input;
            screen.textContent = a;
        }
    }

    else if (!addA){
        if (isNaN(b)){
            b = input;
            screen.textContent = b;
        }
        else {
            b = b * 10 + +input;
            screen.textContent = b;
        }
    }
}

function operate(event){
    sign = event.target.value;
    // if pressing an operation and we do not yet have b
    if (isNaN(b)){
        addA = false
    }
    else {
        switch (sign) {
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
        // a will continue to take the computed value and we just ask for b
        screen.textContent = a;
        b = 'empty';
    }
}

// a, b be the inputs c is the calculated number
// laters we show c but clear a and b
let a = 'empty';
let b = 'empty';


// determine if we are working with a or b
let addA = true;

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