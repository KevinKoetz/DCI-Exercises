"use strict";
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    get email() {
        return `${this.firstName}.${this.lastName}@company.com`.toLowerCase();
    }
}
const emp1 = new Employee("John", "Doe");
console.log(emp1.fullName);
console.log(emp1.email);
