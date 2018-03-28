//Step 1:
var favoriteMovie = "jaws";

switch (favoriteMovie) { 
    case "Jaws": 
        console.log("You're gonna need a bigger boat."); 
        break; 
    case "The Shining": 
        console.log("All work and no play makes Jack a dull boy."); 
        break; 
    case "Star Wars": 
        console.log("Do. Or do not. There is no try."); 
        break; 
    case "Forrest Gump": 
        console.log("Life was like a box of chocolates."); 
        break; 
    case "Back to the future":
        console.log("Where we're going, we don't need roads."); 
        break; 
    default: 
        console.log("Great movie choice!"); 
}
  

//Step 2


var age = 21;
var isMinor = age < 18 ? true : false;
console.log("The value of isMinor is " + isMinor);


//Step 3

var isHolidaySeason; 
var month = "december";

var isHolidaySeason = month === 'december' ? true : false;

console.log("The value of isHolidaySeason is " + isHolidaySeason);