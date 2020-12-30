let password = "PIAIC";
let input = prompt("Please Enter your Password", "");
if (input == "") {
    alert("Please Enter your Password");
} else if (input == password) {
    alert("Correct! The password you entered matches the original password.");
} else {
    alert("Incorrect password");
}