function add(a: number, b: number) {
    return a + b;
}

const substract = function (a: number, b: number): number {
    return a - b;
}
const multiply = (a: number, b: number): number => {
    return a * b;
}
const divide = (num1: number, num2: number, num3?: number): number => {
    return num3 && num3 != 0 ? num1 * num2 / num3 : num1 / num2

}

console.log(multiply(4, 5));

// Generic functions 
// function addition<T> (word1 : T, word2: T) : T{
//     // if (typeof word1 === "string"){
//     //     return word1.concat(word2);

//     // }
//     // else if (typeof word1 === "number"){
//     //     return word1 + word2;
//     // }
//     // else{
//     //     return Error("Not expected input");
//     // }
// } 