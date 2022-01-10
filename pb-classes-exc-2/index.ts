/* 1. Employee Class
Create an Employee class which accepts:

id of the employee as a number
firstName of the employee as a string
lastName of the employee as as string
taxId as a number
salary as a number
The Employee class should have a generatePaySlip method which returns: */

const getId = (()=>{
  let id = 0;
  return ()=>id++
})()

class Employee {
  constructor(firstName: string, lastName: string, taxId: string, salary: number){
    this.id = getId()
    this.firstName = firstName;
    this.lastName = lastName;
    this.taxId = taxId;
    this.salary = salary
  }
  id;
  firstName;
  lastName;
  taxId;
  salary;

  generatePaySlip(){
    // prettier-ignore
    return `Employee ID: ${this.id}\nName: ${this.firstName} ${this.lastName}\nTax ID: ${this.taxId}\nPay: ${(this.salary / 12).toFixed(2)}`
  }
}


const e1 = new Employee("Kevin", "Kötz", "aong", 50000)
const e2 = new Employee("Random", "Some", "long", 50000)
const e3 = new Employee("Name", "Day", "duck", 50000)
const e4 = new Employee("Other", "Imal", "bing", 50000)
const e5 = new Employee("Otter", "Will", "bong", 50000)

e1.generatePaySlip()

class Manager extends Employee{
  constructor(firstName: string, lastName: string, taxId: string, salary: number, managedEmployees: Employee[] = []){
    super(firstName, lastName, taxId, salary)
    this.managedEmployees = managedEmployees;
  }
  managedEmployees;
  addManagedEmployee(em: Employee){
    this.managedEmployees.push(em)
  }
  removeManagedEmployee(em: Employee){
    const index = this.managedEmployees.indexOf(em)
    if(index !== -1) this.managedEmployees.splice(index, 1)
  }
}

const manager = new Manager("Kevin", "Kötz", "aong", 100000)
manager.addManagedEmployee(e2)
manager.addManagedEmployee(e3)
manager.addManagedEmployee(e4)

console.log(manager);

manager.removeManagedEmployee(e2)

console.log(manager);

