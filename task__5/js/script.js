"use strict"

// Задача 5.З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.---------------------------------------------------------------------------------
let userCategory = prompt(`Введість категорію від A до C: `, ``)
const categoryMotocycle = `A`
const categoryCar = `B`
const categoryTruck = `C`


if (userCategory === categoryMotocycle) {
    document.write(`<div class="page__container"> <div class="page__one"> Ваш категорія А - мотоцикли = ${userCategory} </div> </div>`)
} else if(userCategory === categoryCar) {
    document.write(`<div class="page__container"> <div class="page__one"> Ваш категорія B - машини = ${userCategory} </div> </div>`)
} else if (userCategory === categoryTruck){
    document.write(`<div class="page__container"> <div class="page__one"> Ваш категорія С - вантажні автомобілі = ${userCategory} </div> </div>`)
} else {
    document.write(`<div class="page__container"> <div class="page__one"> Ваш категорія Невідома - немає дозволу на керування ): </div> </div>`)
}
