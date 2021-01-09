var names = ["Michael", "John", "Tony"];
var score = [320, 230, 480];
for(var i = 0; i < names.length; i++) {
    var percentage = (score[i] * 100 / 500) 
    document.write("Score of " + names[i] + " is " + score[i] +". Percentage: " + percentage+ "% <br>");
}