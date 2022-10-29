import { reduceEachTrailingCommentRange } from "typescript";

class Employee{
    // Private Attributes
    // You have to add a # before the variable name
    // Has is better for newer versions of Angular
    // It is a native way
    #id: number;
    // Or provate keyword
    age: number
    name: string;

    static getNumber():number{
        return 40;
    }

    constructor(id:number, age: number, name: string){
        this.#id = id;
        this.age = age;
        this.name = name;
    }
    
}

class Manager extends Employee{

    constructor(id:number, age: number, name: string) {
        super (id, age, name);
    }
}

let john: Employee = new Employee (123,12,"John");


// for accesing the static member,
// you don't need to create na object
// but reduceEachTrailingCommentRange, you can just use the 
// class' name.
Employee.getNumber();