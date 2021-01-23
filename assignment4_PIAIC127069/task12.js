var today = new Date();
var days = today.getDate();
if(days < 16) {
    document.write("First fifteen days of the month");
} else {
    document.write("Last days of the month");
}

