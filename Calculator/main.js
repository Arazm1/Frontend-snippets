//calculator program

'use strict'
const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
    
}

function clearDisplay() {
    display.value = "";

}

function calculate() {
    try {
        display.value = eval(display.value); //Security risk! Don't use on product development!
    } catch (error) {
    display.value = "Error"
    }
}