class Employee {
    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    firstName: string;
    lastName: string;
    
    public get fullName() : string {
        return `${this.firstName} ${this.lastName}`
    }

    
    public get email() : string {
        return `${this.firstName}.${this.lastName}@company.com`.toLowerCase()
    }
    
}

const emp1 = new Employee("John", "Doe")
console.log(emp1.fullName);
console.log(emp1.email);
