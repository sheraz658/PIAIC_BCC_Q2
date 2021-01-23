var number = parseFloat(prompt("Enter your number", ""));
var roundTo = parseInt(prompt("Enter to which decimal point you need to round to", ""));
alert("Output: " + number.toFixed(roundTo));