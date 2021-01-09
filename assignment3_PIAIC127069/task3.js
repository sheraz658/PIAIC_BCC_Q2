var colorsNames = ["Blue", "Green","Purple", "Pink"];
alert("Initial Arary = " + colorsNames);
var color1 = prompt("Please Enter a Color to add to the beggining of the array", "");
if (color1 != null) {
    colorsNames.unshift(color1);
    alert("New Array = " + colorsNames);
    document.write(colorsNames);
    document.write("<br>");
}
var color2 = prompt("Please Enter a Color to add to the end of the array", "");
if (color2 != null) {
    colorsNames.push(color2);
    alert("New Array = " + colorsNames);
    document.write(colorsNames);
    document.write("<br>");
}
    alert("Adding two new colors");
    colorsNames.unshift("Red", "Orange");
    alert("New Array = " + colorsNames);
    document.write(colorsNames);
    document.write("<br>");
    alert("deleting first element of the array");
    colorsNames.shift();
    alert("New Array = " + colorsNames);
    document.write(colorsNames);
    document.write("<br>");
    alert("deleting last element of the array");
    colorsNames.pop();
    alert("New Array = " + colorsNames);
    document.write(colorsNames);
    document.write("<br>");
var cIndex = prompt("Please Enter Which Index you want to add a color to", 0);
var cName = prompt("Please Enter A color which you want to be added to the Index", "");
if (cIndex != null || cName != null) {
     colorsNames.splice(cIndex,0,cName);
     alert("New Array = " + colorsNames);
     document.write(colorsNames);
     document.write("<br>");
}
var cIndex = prompt("Please Enter Which Index you want to remove a color to", 0);
var count = prompt("Please Enter how many colors you want to be removed", "");
if (cIndex != null || count != null) {
     colorsNames.splice(cIndex, count)
     alert("New Array = " + colorsNames);
     document.write(colorsNames);
     document.write("<br>");
}
