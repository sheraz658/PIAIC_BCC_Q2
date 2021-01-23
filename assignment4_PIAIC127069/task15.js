var age = parseInt(prompt("Enter your Age", ""))
var now = new Date()
document.write("Your birth year is: " + (now.getFullYear()-age));