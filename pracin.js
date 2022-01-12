class Members {
    constructor(name, age, phone, salary) {
this.name = name;
this.age = age;
this.phone = phone;
this.salary = salary;
}

printMembers() {
    console.log(" Name of the member is : " + this.name);
    console.log(" Age of the member is : " + this.age);
    console.log(" Phone Number of the member is : " + this.phone);
    console.log( "Salary of the member is : " + this.salary);
};
}

let mem = new Members('Juan Doe', 23, '623-345-9078', 15000);
mem.printMembers();

class Employees extends Members{
constructor (name, age, phone, salary, specilization, department) 
{
super(name, age, phone, salary);

this._specilization = specilization;
    this.department = department;
  }

  get specilization() {
      return this._specilization;
  }

  set specilization(newSpecilization) {
      this._specilization = newSpecilization;
  }
}

let emp = new Employees('Joe Bama', 67, '623-263-7238', 24000);
emp.name;
console.log(emp.name);
emp.age;
console.log(emp.age);
emp.phone;
console.log(emp.phone);
emp.salary;
console.log(emp.salary);
