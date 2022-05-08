const botaoMenu01 = document.querySelector('.button_01')
const botaoMenu02 = document.querySelector('.button_02')
const botaoMenu04 = document.querySelector('.button_04')
const documentDisplay01 = document.querySelector('.text_01')
const documentDisplay02 = document.querySelector('.text_02')
const documentDisplay04 = document.querySelector('.text_04')

var countToggle01 = 1
var countToggle02 = 1
var countToggle04 = 1

botaoMenu01.addEventListener('click', buttonFunction01)
botaoMenu02.addEventListener('click', buttonFunction02)
botaoMenu04.addEventListener('click', buttonFunction04)

function buttonFunction01() {
    if (countToggle01 % 2 !== 0) {
        documentDisplay01.style.display = "block";
    } else {
        documentDisplay01.style.display = "none";
    }
    countToggle01++
}

function buttonFunction02() {
    if (countToggle02 % 2 !== 0) {
        documentDisplay02.style.display = "block";
    } else {
        documentDisplay02.style.display = "none";
    }
    countToggle02++
}

function buttonFunction04() {
    if (countToggle04 % 2 !== 0) {
        documentDisplay04.style.display = "block";
    } else {
        documentDisplay04.style.display = "none";
    }
    countToggle04++
}