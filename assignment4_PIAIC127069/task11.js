var number = prompt("Enter your number", "");
var sum = 0;
for (var i = 0; i < number.length; i++) {
    sum = sum + parseInt(number[i])
}
document.write("Mean of " + number + " = " + sum/number.length)