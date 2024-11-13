const employee = {
  name: "박현민",
  age: 34,
  position: "frontEnd",
  work() {
    console.log(this.name);
  },
};

enum Developer {
  FRONTEND = "frontend",
}

/**
 * 인터페이스는 private나 protected가 불가함,
 *
 */
interface EmployeeInterface {
  name: string;
}

class Employee implements EmployeeInterface {
  constructor(
    readonly name: string,
    private readonly age: number,
    private readonly position: Developer
  ) {}

  work() {
    console.log(this.name);
  }
}
const em = new Employee("박현민", 34, Developer.FRONTEND);
console.log(Object.getPrototypeOf(em) === Employee.prototype);
