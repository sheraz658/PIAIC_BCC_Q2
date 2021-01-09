var a = [10,20,4,40,60,70];
var b = [1,2,3,4,5,6,7,8,9,10];
let count;
a = a.concat(b);
a = a.sort(function(a,b) {return a-b});
for (let i = 0; i < a.length; i++) {
    count = 0;
    if (i == 0) {
        b.push(a[0]);
    } else {
        for (let u = 0; u < b.length; u++) {
            if(a[i] == b[u]){
                count = 1;
            }
        }
        if(count == 1) {} 
        else {
            b.push(a[i]);
        }
    }
}
document.write(b)