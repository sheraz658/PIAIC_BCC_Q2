var a = ["cake", "applepie", "cookie", "chips", "patties"]
var input = prompt("Welcome to Bakery, What do you want to order?", "") 
var available = false;
for (var i = 0; i < a.length; i++) {
        if(input == a[i]) {
            document.write(input + " is available at index " + i + " in our bakery")
            available = true;
            break;
        } 
}
if (available != true) {
    document.write("We are sorry. " + input + " is not available in our bakery")
}