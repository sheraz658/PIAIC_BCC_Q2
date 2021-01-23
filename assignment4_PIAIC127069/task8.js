var some_number = parseInt(prompt("Enter some number", ""));
document.write("input: " + some_number);
var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
'seventeen', 'eighteen', 'nineteen'];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
'ninety'];

function convertNum(num){

  
    var numString = num.toString();

    if (num === 0) return 'zero';
    if (num < 20) {
      return ones[num];
    }
    if (numString.length === 2) {
      return tens[numString[0]] + ' ' + ones[numString[1]];
    }
    if (numString.length == 3) {
      if (numString[1] === '0' && numString[2] === '0')
        return ones[numString[0]] + ' hundred';
      else
        return ones[numString[0]] + ' hundred and ' + convertNum(+(numString[1] + numString[2]));
    }
    if (numString.length === 4) {
      var end = +(numString[1] + numString[2] + numString[3]);
      if (end === 0) return ones[numString[0]] + ' thousand';
      if (end < 100) return ones[numString[0]] + ' thousand and ' + convertNum(end);
      return ones[numString[0]] + ' thousand ' + convertNum(end);
    }
  }

document.write("<br>output: " + convertNum(some_number))