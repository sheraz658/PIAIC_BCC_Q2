var secretNumber = 8;
var input = parseInt(prompt("Please Enter a number", ""));

if (input == secretNumber) {
    alert("Bingo!");
} else if (++input == secretNumber) {
    alert("Close enough to the correct answer");
}