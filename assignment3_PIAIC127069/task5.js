var values = [1,2,3,3,4,4,5,6,5];
document.write("Sample Array = " + values);
var uniqueValues = [];
var count = 0;
for (let i = 0; i < values.length; i++) {
    count = 0;
    if (i == 0) {
        uniqueValues.push(values[0]);
    } else {
        for (let u = 0; u < uniqueValues.length; u++) {
            if(values[i] == uniqueValues[u]){
                 count = 1;
            }
        }
        if(count == 1) {} 
        else {
            uniqueValues.push(values[i]);
        }
    }
}
document.write("<br> Sample Output:" + uniqueValues);
