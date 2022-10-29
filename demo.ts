// Strings
let lName :  number | string= "Contrary" || 12 || 14;
if(typeof lName === "string"){
    console.log("It is a string");
}
// integers or numbers
let ages: number = 12 || 14;

interface animal {
    age: number;
    name: string;
}

let dog:animal;

// Boolean
let isMale :boolean = true;


// Arrays
let myNames : Array<string> = [];
let myNumber2 : number[] = [];
let randomArray : Array<any>;

// Enum
enum color {
    Red = 13,
    Turquoise = 16,
    Purple
}

const enum color2 {
    Red,
    Turquoise,
    Purple
}

// Tuple

let myTuple : [number, string];
myTuple = [14, "Bolivia"];

// Any
let anyVar: any;
let anyVar2;

// void
function noReturnFunc (age: number, name: string): void{
    console.log(`Hello guys, my name is ${name} and I am ${age} years old`);


}
