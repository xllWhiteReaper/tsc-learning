"use strict";
// Strings
let lName = "Contrary" || 12 || 14;
if (typeof lName === "string") {
    console.log("It is a string");
}
// integers or numbers
let ages = 12 || 14;
let dog;
// Boolean
let isMale = true;
// Arrays
let myNames = [];
let myNumber2 = [];
let randomArray;
// Enum
var color;
(function (color) {
    color[color["Red"] = 13] = "Red";
    color[color["Turquoise"] = 16] = "Turquoise";
    color[color["Purple"] = 17] = "Purple";
})(color || (color = {}));
// Tuple
let myTuple;
myTuple = [14, "Bolivia"];
// Any
let anyVar;
let anyVar2;
// void
function noReturnFunc(age, name) {
    console.log(`Hello guys, my name is ${name} and I am ${age} years old`);
}
