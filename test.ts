interface test {
    property: string,
    someMethod(): string
}

interface two {
    number: number
}

class testClass implements test, two {
    constructor(property: string, number: number){
        this.property = property
        this.number = number
    }
    number: number;
    property: string;
    someMethod() {
        return `${this.property} World`
    }
}

const obj = new testClass("Hello",2)



console.log(obj)
console.log(obj.someMethod());
