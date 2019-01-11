const tabNumber = [
	0,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9
];

const tabSymbol = [
	'+',
	'-',
	'*'
];

let number1 = '';
let number2 = '';
let operator;
let first = true;

tabNumber.forEach(function(number) {
	document.querySelector(`button[name="${number}"]`).addEventListener('click', function() {
		document.querySelector('input').value += document.querySelector(`button[name="${number}"`).textContent;
	});
});

tabSymbol.forEach(function(symbol) {
	document.querySelector(`button[name="${symbol}"]`).addEventListener('click', function() {
		if (number1 != '') {
			number2 = +document.querySelector('input').value;
			if (symbol == '+') number1 = number1 + number2;
			if (symbol == '*') number1 = number1 * number2;
			if (symbol == '-') number1 = number1 - number2;
			document.querySelector('input').value = '';
		} else {
			number1 = +document.querySelector('input').value;
			document.querySelector('input').value = '';
		}
		operator = symbol;
	});
});

document.querySelector(`button[name="="]`).addEventListener('click', function() {
	number2 = +document.querySelector('input').value;
	if (operator == '+') document.querySelector('input').value = number1 + number2;
	if (operator == '*') document.querySelector('input').value = number1 * number2;
	if (operator == '-') document.querySelector('input').value = number1 - number2;
});

document.querySelector(`button[name="R"]`).addEventListener('click', function() {
	document.querySelector('input').value = '';
	number1 = '';
	number2 = '';
});
