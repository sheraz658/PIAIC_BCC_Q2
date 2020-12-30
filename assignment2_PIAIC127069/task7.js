var number1 = parseInt(prompt("Please Enter First Number", ""));
var number2 = parseInt(prompt("Please Enter Second Number", ""));
var operation = prompt("Please Enter the operation (+, -, /, *, %)", "");
if (operation == "+") {
    alert(number1 + number2);
} else if (operation == "-") {
    alert(number1 - number2);
} else if (operation == "*") {
    alert(number1 * number2);
} else if (operation == "/") {
    alert(number1 / number2);
} else if (operation == "%") {
    alert(number1 % number2);
}