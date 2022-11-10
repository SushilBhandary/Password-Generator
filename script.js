const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    navigator.clipboard.writeText(resultEl.innerText);
    alert('Copied')
})

generateEl.addEventListener('click', () => {
    resultEl.innerText = generatePassword(randomFunc.lower, randomFunc.upper, randomFunc.number, randomFunc.symbol, lengthEl.value)
})

function generatePassword(lower, upper, number, symbol, length) {
    let pass = ''
    const list = []
    if ( uppercaseEl.value == 'on' ) {
        pass += upper() 
        list.push(upper)
    }
    if ( lowercaseEl.value == 'on' ) {
        pass += lower() 
        list.push(lower)
    }
    if ( numbersEl.value == 'on' ) {
        pass += number() 
        list.push(number)
    }
    if ( symbolsEl.value == 'on' ) {
        pass += symbol() 
        list.push(symbol)
    }
    let l = pass.length
    for (let i = 0; i < length-l; i++) {
       pass += list[ Math.floor( Math.random()*list.length)]() 
    }
    return pass;
}

function getRandomLower() {
    let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    return lowerCase.charAt( Math.floor( Math.random()*26))
}

function getRandomUpper() {
    let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return upperCase.charAt( Math.floor( Math.random()*26))
}

function getRandomNumber() {
    return  Math.floor( Math.random()*10)
}

function getRandomSymbol() {
    let randomSymbol = '!@#$%^&*()_+-={}[];:|<>?,./';
    return randomSymbol.charAt( Math.floor( Math.random()*randomSymbol))
} 


