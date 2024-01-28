/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function addNumbers(x, y) {
    return x + y;
}

/* Function Expression - Subtract Numbers */
const subtractNumbers = function(x, y) {
    return x - y;
};


/* Arrow Function - Multiply Numbers */
const multiplyNumbers = (x, y) => x * y;


/* Open Function Use - Divide Numbers */
const divide = (x,y) => x/y;
const divideNumbers = () => {
    let dividend = parseFloat(document.getElementById('dividend').value);
    let divisor = parseFloat(document.getElementById('divisor').value);
    let quotient = divide(dividend, divisor);
    document.getElementById('quotient').innerHTML = quotient;

}

document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

function getTotal () {

    let subtotal = parseFloat(document.getElementById('subtotal').value);

    if (document.getElementById('member').checked) {
        subtotal = subtotal - subtotal * 0.2;
    }

    document.getElementById('total').textContent = `$${subtotal.toFixed(2)}`;
}
document.getElementById('getTotal').addEventListener('click', getTotal);


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbersArray = Array.from({ length: 13 }, (_, index) => index + 1);
document.getElementById('array').textContent = numbersArray.join(', ');

/* Output Odds Only Array */
const odds = numbersArray.filter(number => number % 2 !== 0);
document.getElementById('odds').textContent = odds.join(', ');

/* Output Evens Only Array */
const evens = numbersArray.filter(number => number % 2 === 0);
document.getElementById('evens').textContent = evens.join(', ');

/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce((acc, curr) => acc + curr, 0);
document.getElementById('sumOfArray').textContent = sumOfArray;

/* Output Multiplied by 2 Array */
const multiplied = numbersArray.map(number => number * 2);
document.getElementById('multiplied').textContent = multiplied.join(', ');

/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = multiplied.reduce((acc, curr) => acc + curr, 0);
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied.toFixed(2);