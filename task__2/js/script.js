"use strict"

// Задача 2. З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.----------------------------------------
let priceProduct = parseFloat(prompt(`Введіть ціну товару:`, `ціна`))
let quantityMoney = parseFloat(prompt(`Введіть кількість грошей:`, `кількість`))
const priceLottery = 4

if (priceProduct > quantityMoney) {
    document.write(`<div class="page__container"> <div class="page__one"> Замало коштів! </div> </div>`)
} else {
    document.write(`<div class="page__container"> <div class="page__one"> Пропонуємо купити лотерею за ${priceLottery} грн! </div> </div>`)
}



