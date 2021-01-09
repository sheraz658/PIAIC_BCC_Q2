var array = [24, 53, 78, 91, 12];
document.write("Array Items: " + array);
var largestNumber = Math.max.apply(Math, array);
document.write("<br>The largent number is " +largestNumber)