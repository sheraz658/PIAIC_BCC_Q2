var color = prompt("Please Enter Color of Road Traffic Signal", "");

if (color.toLowerCase() == "red") {
    document.write("Must Stop");
} else if (color.toLowerCase() == "yellow") {
    document.write("Ready to move");
} else if (color.toLowerCase() == "green") {
    document.write("Move now");
}