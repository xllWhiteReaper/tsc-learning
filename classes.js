"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, age, name) {
        // Private Attributes
        // You have to add a # before the variable name
        // Has is better for newer versions of Angular
        // It is a native way
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.age = age;
        this.name = name;
    }
    static getNumber() {
        return 40;
    }
}
_Employee_id = new WeakMap();
class Manager extends Employee {
    constructor(id, age, name) {
        super(id, age, name);
    }
}
let john = new Employee(123, 12, "John");
// for accesing the static member,
// you don't need to create na object
// but reduceEachTrailingCommentRange, you can just use the 
// class' name.
Employee.getNumber();
