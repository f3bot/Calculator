const numbers = document.querySelectorAll('#numbers')
const operators = document.querySelectorAll('#operator')
const equal = document.querySelector('#equal')
const display = document.querySelector('.display')
const mathDisplay = document.querySelector('.mathdisplay')
const firstDisplay = document.querySelector('.firstvalue')
const secondDisplay = document.querySelector('.seconddisplay')
const resultDisplay = document.querySelector('.resultvalue')
const clear = document.querySelector('#clear')


let test = 'huuuj'
let firstValue = 0
let secondValue = 0
let finalValue = 0
let result = ''
let mathElement = ''
const isClicked = false

for(let i = 0; i < operators.length; i++){
    console.log("added operator")
    operators[i].addEventListener('click', (e) =>{
        let mathatr = e.target.getAttribute('value')
        console.log(mathatr)
        mathDisplay.innerHTML = mathatr
        mathElement = mathatr
        console.log("MATH SIGN" + mathElement)
    })
}

for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', (e) =>{
        let numberatr = e.target.getAttribute('value')
        console.log(numberatr)
        if(mathElement === ''){
            firstValue += numberatr
            firstDisplay.innerHTML += numberatr
        }else if(mathElement === 'X' || mathElement === '/' || mathElement === '+' || mathElement === '-'){
            console.log("INITIALZIE SECOND VALUE")
            secondValue += numberatr
            secondDisplay.innerHTML += numberatr
        }
    })
}

clear.addEventListener('click', () =>{
    firstDisplay.innerHTML = ''
    mathDisplay.innerHTML = ''
    secondDisplay.innerHTML = ''
    resultDisplay.innerHTML = ''
    firstValue = 0
    mathatr = ''
    mathElement = ''
    secondValue = 0
    result = 0
})

equal.addEventListener('click', () =>{
    let answer = 0
    switch(mathElement){
        case 'X':
            answer = firstValue * secondValue
            break
        case '/':
            answer = firstValue / secondValue
            break
        case '+':
            answer = firstValue + secondValue
            break
        case '-':
            answer = firstValue - secondValue
            break    
    }
    console.log("answer is" + answer)
    resultDisplay.innerHTML = answer
})
