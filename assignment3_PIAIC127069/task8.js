var i = 0;
document.write("Counting: ")
for (i = 1; i < 11; i++) {
    document.write(i);
    if(i<10)
        document.write(",");
}
document.write("<br>Reverse Counting: ")
for (i = 10; i > 0; i--) {
    document.write(i);
    if(i>1)
        document.write(",");
}
document.write("<br>Even: ");
for (i = 0; i < 22; i += 2) {
    document.write(i);
    if(i<20)
        document.write(",");
} 
document.write("<br>Odd:");
for (i = 1; i < 21; i = i + 2) {
    document.write(i);
    if(i<19)
        document.write(",");
}
document.write("<br>Series: ");
for (i = 2; i < 22; i += 2) {
    document.write(i +"k");
    if(i<20)
        document.write(",");
   
} 