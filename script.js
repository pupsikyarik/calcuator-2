const opers = prompt('vvesti operator (or +, -, /, *)')
const number1 = parseFloat(prompt('first 4islo'))
const number2 = parseFloat(prompt('second 4islo'))

let result


if (opers == '+') {
    result = number1 + number2
}

else if (opers == '-') {
    result = number1 - number2
}

else if (opers == '*') {
    result = number1 * number2
}

else {
    result = number1 / number2
}

alert(`${number1} ${opers} ${number2} = ${result}`)
