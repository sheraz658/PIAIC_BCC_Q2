var full_email = prompt("Enter your email", "");
var letters = /^[A-Za-z]+$/;
var valid_email = "Invalid";
 if(full_email.includes("@")){
        var at_Index = full_email.indexOf("@");
        var first_part = full_email.substr(0, at_Index);
        var second_part = full_email.substr(at_Index+1);
        if((first_part.length > 0 && first_part.match(letters)) && second_part.includes(".")) {
            var dot_Index = second_part.indexOf(".");
            var second_part_1 = second_part.substr(0, dot_Index);
            var second_part_2 = second_part.substr(dot_Index+1);
            if(second_part_1.length > 0 && second_part_2.length > 0)
                valid_email = "Valid";
        }
         

    }
        
alert("Email is " + valid_email);
