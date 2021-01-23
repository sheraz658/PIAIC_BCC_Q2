var todayDate = new Date();
var Todaymilli = todayDate.getTime();
var todayMin = todayDate.getMinutes();
var diff = Todaymilli - todayMin;
var diffMin = diff/(1000*60*60);
var accurateMin = Math.floor(diffMin);
document.write("Current Date: " + todayDate);
document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)