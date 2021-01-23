var password = prompt("Enter your password", "");
var regExp = new RegExp("(?=.*[a-z])(?=.*[0-9])(?=.{8,})");
if(!(password.match(regExp) != null && isNaN(parseInt(password[0]))))
    alert("Enter a valid Password. For Characters codes of a-z, A-Z & 0-9. The password cannot start with a number");
