const botaoMenu01 = document.querySelector('.button_01')
const botaoMenu02 = document.querySelector('.button_02')
const botaoMenu03 = document.querySelector('.button_03')
const botaoMenu04 = document.querySelector('.button_04')
const botaoMenu05 = document.querySelector('.button_05')
const botaoMenu06 = document.querySelector('.button_06')
const botaoMenu07 = document.querySelector('.button_07')
const botaoMenu08 = document.querySelector('.button_08')
const botaoMenu09 = document.querySelector('.button_09')
const documentDisplay01 = document.querySelector('.text_01')
const documentDisplay02 = document.querySelector('.text_02')
const documentDisplay03 = document.querySelector('.text_03')
const documentDisplay04 = document.querySelector('.text_04')
const documentDisplay05 = document.querySelector('.text_05')
const documentDisplay06 = document.querySelector('.text_06')
const documentDisplay07 = document.querySelector('.text_07')
const documentDisplay08 = document.querySelector('.text_08')
const documentDisplay09 = document.querySelector('.text_09')

var countToggle01 = 1, countToggle02 = 1, countToggle03 = 1, countToggle04 = 1, countToggle05 = 1, countToggle06 = 1, countToggle07 = 1, countToggle08 = 1, countToggle09 = 1 

botaoMenu01.addEventListener('click', buttonFunction01)
botaoMenu02.addEventListener('click', buttonFunction02)
botaoMenu03.addEventListener('click', buttonFunction03)
botaoMenu04.addEventListener('click', buttonFunction04)
botaoMenu05.addEventListener('click', buttonFunction05)
botaoMenu06.addEventListener('click', buttonFunction06)
botaoMenu07.addEventListener('click', buttonFunction07)
botaoMenu08.addEventListener('click', buttonFunction08)
botaoMenu09.addEventListener('click', buttonFunction09)

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

function buttonFunction03() {
    if (countToggle03 % 2 !== 0) {
        documentDisplay03.style.display = "block";
    } else {
        documentDisplay03.style.display = "none";
    }
    countToggle03++
}

function buttonFunction04() {
    if (countToggle04 % 2 !== 0) {
        documentDisplay04.style.display = "block";
    } else {
        documentDisplay04.style.display = "none";
    }
    countToggle04++
}

function buttonFunction05() {
    if (countToggle05 % 2 !== 0) {
        documentDisplay05.style.display = "block";
    } else {
        documentDisplay05.style.display = "none";
    }
    countToggle05++
}

function buttonFunction06() {
    if (countToggle06 % 2 !== 0) {
        documentDisplay06.style.display = "block";
    } else {
        documentDisplay06.style.display = "none";
    }
    countToggle06++
}

function buttonFunction07() {
    if (countToggle07 % 2 !== 0) {
        documentDisplay07.style.display = "block";
    } else {
        documentDisplay07.style.display = "none";
    }
    countToggle07++
}

function buttonFunction08() {
    if (countToggle08 % 2 !== 0) {
        documentDisplay08.style.display = "block";
    } else {
        documentDisplay08.style.display = "none";
    }
    countToggle08++
}

function buttonFunction09() {
    if (countToggle09 % 2 !== 0) {
        documentDisplay09.style.display = "block";
    } else {
        documentDisplay09.style.display = "none";
    }
    countToggle09++
}