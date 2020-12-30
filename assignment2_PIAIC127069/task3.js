var a = 4;
if (++a === 5) {
alert("given condition for variable a is true"); // will alert
}
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true"); // will not alert
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");// will not alert
}
if (c === 13){
alert("condition 2 is true");// will alert
}
if (++c < 14){
alert("condition 3 is true");// will not alert
}
if(c === 14){
alert("condition 4 is true"); // will alert
}
materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals"); //// will alert
}

if (true){

alert("True");// will alert
}

if (false){
alert("False"); // will not alert
}

if("car" < "cat"){

alert("car is smaller than cat");// will alert
}
