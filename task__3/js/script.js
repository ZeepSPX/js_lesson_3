"use strict"

// Задача 3. Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.---------------------------------------------------------------------------------
let minNumber = 1;
let maxNumber = 5;
let numberRandom = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let count = 2

function guessNum() {
    var out = document.getElementById('out')
    if (count == 0) {    
        out.innerHTML = `спроб більше немає`
        return
    } 
    
    var userNumber = document.getElementById(`userNumber`).value
    if (userNumber == numberRandom){
        out.innerHTML = `ви вгадали!`
    }else if (userNumber > 5 || userNumber < 1) {
        out.innerHTML = `Введіть число від 1 до 5`
    }else if (userNumber > numberRandom) {
        out.innerHTML = `ви ввели більше число`
    }else if(userNumber < numberRandom){
        out.innerHTML = `ви ввели менше число`
    }
    count--
}


