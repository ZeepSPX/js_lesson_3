"use strict"

// Задача 4. З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).---------------------------------------------------------------------------------
let userAge = parseFloat(prompt(`Введіть свій вік:`, ``))
const ageChildren = 6
const ageSchoolBoy = 17
const ageStudent = 25
const ageWorker = 60

if (userAge <= ageChildren) {
    document.write(`<div class="page__container"> <div class="page__one"> Ваш вік дитина = ${userAge} </div> </div>`)
} else if (userAge <= ageSchoolBoy) {
    document.write(`<div class="page__container"> <div class="page__one"> Ваш вік підліток = ${userAge} </div> </div>`)
}else if (userAge <= ageStudent) {
    document.write(`<div class="page__container"> <div class="page__one"> Ваш вік студент = ${userAge} </div> </div>`)
} else if (userAge <= ageWorker) {
    document.write(`<div class="page__container"> <div class="page__one"> Ваш вік дорослий (працівник) = ${userAge} </div> </div>`)
} else {
    document.write(`<div class="page__container"> <div class="page__one"> Ваш вік пенсіонер = ${userAge} </div> </div>`)
}





