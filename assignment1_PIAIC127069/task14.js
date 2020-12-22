var a = 2;
var b = 1;

document.write("a is "+a);
document.write("<br> b is " +b);
var result = --a - --b + ++b +b--;
document.write("<br> result is " + result);

/* Explaination

--a;  -> a = 1 // a will be decrement by 1
--a - --b;  -> 1 - 0 = 1 // both a & b will be decrement by 1 and result will be 1 - 0 = 1
--a - --b + ++b; -> 1 - 0 + 1 = 2 // then we will increment b again by 1 and add to previous result i.e. 1+ 1 = 2
--a - --b + ++b + b--; -> 1 - 0 + 1 + 1 = 3 // then will be add b value which is 1 to previous result and then decrement it after adding ie. 2 + 1 = 3  and be becomes 0 after this addition

*/