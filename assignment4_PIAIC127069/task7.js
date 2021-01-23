var text = "The quick brown fox jumps over the lazy dog";
document.write("Text: " + text);
var theOccurance = text.toLowerCase().split("the").length-1;
document.write("<br> There are " + theOccurance+ " occurrence(s) of the word 'the'")