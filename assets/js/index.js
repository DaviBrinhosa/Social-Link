const botaoMenu01 = document.querySelector('.button_01')
const botaoMenu04 = document.querySelector('.button_04')
const documentDisplay01 = document.querySelector('.text_01')
const documentDisplay04 = document.querySelector('.text_04')

var countToggle01 = 1
var countToggle04 = 1

botaoMenu01.addEventListener('click', buttonFunction01)
botaoMenu04.addEventListener('click', buttonFunction04)

function buttonFunction01() {
    if (countToggle01 % 2 !== 0) {
        documentDisplay01.style.display = "block";
    } else {
        documentDisplay01.style.display = "none";
    }
    countToggle01++
}

function buttonFunction04() {
    if (countToggle04 % 2 !== 0) {
        documentDisplay04.style.display = "block";
    } else {
        documentDisplay04.style.display = "none";
    }
    countToggle04++
}