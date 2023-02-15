"use strict"

// Задача 6.З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.---------------------------------------------------------------------------------
let userDay = parseFloat(prompt(`Введіть день тижня від 1 до 7: `, ``))
const dayWeeksMonday = 1
const dayWeeksTuesday = 2
const dayWeeksWednesday = 3 
const dayWeeksThursday = 4
const dayWeeksFriday = 5
const dayWeeksSaturday = 6
const dayWeeksSunday = 7

if (userDay <= dayWeeksMonday) {
    document.write(`<div class="page__container"> <div class="page__one"> день тижня Понеділок = ${userDay} </div> </div>`)
} else if (userDay <= dayWeeksTuesday) {
    document.write(`<div class="page__container"> <div class="page__one"> день тижня Вівторок = ${userDay} </div> </div>`)
} else if (userDay <= dayWeeksWednesday){
    document.write(`<div class="page__container"> <div class="page__one"> день тижня Середа = ${userDay} </div> </div>`)
} else if (userDay <= dayWeeksThursday) {
    document.write(`<div class="page__container"> <div class="page__one"> день тижня Четвер = ${userDay} </div> </div>`)
} else if (userDay <= dayWeeksFriday) {
    document.write(`<div class="page__container"> <div class="page__one"> день тижня П'ятниця = ${userDay} </div> </div>`)
} else if (userDay <= dayWeeksSaturday) {
    document.write(`<div class="page__container"> <div class="page__one"> день тижня Субота = ${userDay} </div> </div>`)
} else if(userDay <= dayWeeksSunday) {
    document.write(`<div class="page__container"> <div class="page__one"> день тижня Неділя = ${userDay} </div> </div>`)
} else {
    document.write(`<div class="page__container"> <div class="page__one"> ${userDay} день нічого собі, який довгий у вас тиждень О_О </div> </div>`)
}

