'use strict'
const number = document.getElementById('num');
const button = document.getElementById('button');
const end = document.getElementById('end');

let currentNum = 1;
const goalNum = Math.floor(Math.random() * 51)


button.addEventListener('click', () => {
    console.log("Goal number: ", goalNum);
    currentNum++; 
    //console.log("New number:", currentNum);
    if (currentNum <= goalNum){
        number.textContent = currentNum;
    } else {
        end.innerHTML = "Game over. You won!"
    }
});