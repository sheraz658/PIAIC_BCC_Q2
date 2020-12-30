var subject1_score = parseInt(prompt("Enter Score for Subject 1", 0));
var subject2_score = parseInt(prompt("Enter Score  For Subject 2", 0));
var subject3_score = parseInt(prompt("Enter Score For Subject 3", 0));
var total_score =(subject1_score + subject2_score + subject3_score);

var percentage = (total_score) / 3;
document.write("<h1>Marks Sheet</h1>");
document.write("<br> <br>");
document.write("<h2>Total marks: 300</h2>");
document.write("<h2>Marks obtained: " + total_score + "</h2>");
document.write("<h2>Percentage = " + percentage + "%</h2>");

if (percentage >= 80) {
    document.write("<h2>Grade: A-one</h2>");
    document.write("<h2>Remarks: Excellent</h2>");
} else if (percentage >= 70) {
    document.write("<h2>Grade: A</h2>");
    document.write("<h2>Remarks: Good</h2>");
} else if (percentage >= 60) {
    document.write("<h2>Grade: B</h2>");
    document.write("<h2>Remarks: You need to improve</h2>");
} else if (percentage < 60) {
    
    document.write("<h2>Grade: Fail</h2>");
    document.write("<h2>Remarks: Sorry</h2>");
}

