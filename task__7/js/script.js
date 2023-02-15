"use strict"

// Задача 7.З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься.---------------------------------------------------------------------------------
let userNumberMonth = parseFloat(prompt(`Введіть номер місяця від 1 до 12:`, ``))
const seasonWinter = 2
const seasonSpring =  5
const seasonSummer = 8
const seasonAutumn = 11
const seasonWinterStart = 12



if ((userNumberMonth <= seasonWinter) || (userNumberMonth <= seasonWinterStart)) {
  document.write(`<div class="page__container"> <div class="page__one"> Пора року Зима  = ${userNumberMonth} </div> </div>`)
} else if (userNumberMonth <= seasonSpring) {
  document.write(`<div class="page__container"> <div class="page__one"> Пора року Весна  = ${userNumberMonth} </div> </div>`)
}else if (userNumberMonth <= seasonSummer){
  document.write(`<div class="page__container"> <div class="page__one"> Пора року Літо  = ${userNumberMonth} </div> </div>`)
}else if (userNumberMonth <= seasonAutumn){
  document.write(`<div class="page__container"> <div class="page__one"> Пора року Осінь  = ${userNumberMonth} </div> </div>`)
} else {
  document.write(`<div class="page__container"> <div class="page__one"> номер ${userNumberMonth} пори року, вибачте але календар не настільки довгий 0_0 </div> </div>`)
}



