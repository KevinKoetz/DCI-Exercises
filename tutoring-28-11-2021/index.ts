function multiply(num1, num2){
    return num1 * num2
}

let string: string = "sterin"
let number: number = 2
let object: object = {}
let booleans: boolean = true
let typeArray: string[] = ["Hello", "fine"]
let numArray: number[] = [2,4,6]
let undef: undefined = undefined;
let nu: null = null
let anyVaribale: any = "heloo"
anyVaribale = 2
anyVaribale = null
anyVaribale = {}

class Person {
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    name: string;
    age: number;
}

class Teacher extends Person {
    constructor(name: string, age: number, schoolClass: string){
        super(name, age)
        this.schoolClass = schoolClass
    }
    schoolClass: string;
}


let john = new Person("John", 31)
let jane = new Teacher("Jane", 29, "E-06")








