function multiply(num1, num2) {
    return num1 * num2;
}
let string = "sterin";
let number = 2;
let object = {};
let booleans = true;
let typeArray = ["Hello", "fine"];
let numArray = [2, 4, 6];
let undef = undefined;
let nu = null;
let anyVaribale = "heloo";
anyVaribale = 2;
anyVaribale = null;
anyVaribale = {};
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Teacher extends Person {
    constructor(name, age, schoolClass) {
        super(name, age);
        this.schoolClass = schoolClass;
    }
}
let john = new Person("John", 31);
let jane = new Teacher("Jane", 29, "E-06");
