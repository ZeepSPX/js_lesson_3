"use strict"

// Задача 1. З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова. ---------------------------------------------------------------------------------

let nameUserOne = prompt(`Введіть ім'я першої дитини`, `ім'я`)
let nameUserTwo = prompt(`Введіть ім'я другої дитини`, `ім'я`) 
let quantityCandyFirst = parseFloat(prompt(`Введіть кілкьість цукерок першої дитини`, `кількість`))
let quantityCandyTwo = parseFloat(prompt(`Введіть кілкьість цукерок другої дитини`, `кількість`))


if ( quantityCandyTwo < quantityCandyFirst) {
    document.write(`<div class="page__container"> <div class="page__one"> більша кількість цукерок у першої дитини = ${nameUserOne}  </div> </div>`)
} else if (quantityCandyTwo > quantityCandyFirst) {
    document.write(`<div class="page__container"> <div class="page__one"> більша кількість цукерок у другої дитини = ${nameUserTwo} </div> </div>`)
} else {
    document.write(`<div class="page__container"> <div class="page__one"> однакова кількість </div> </div>`)
}
