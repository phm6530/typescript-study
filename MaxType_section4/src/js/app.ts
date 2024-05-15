class requestError {
  private employees: string[] = [];
  private obj: object = {};

  constructor(public name: string, public id: string) {}

  method(this: requestError) {
    this.obj = { name: this.name, id: this.id, employees: this.employees };
    console.log(this.obj);
  }
  addEmployess(employee: string) {
    this.employees.push(employee);
  }
  printEloyess() {
    console.log(this.employees);
  }
}

const accounting = new requestError("hyunmin", "phm6530");
accounting.method();
