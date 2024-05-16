type requestErrorObj = {
  name: string;
  id: string;
  employees: string[];
};

//부모
class requestError {
  private employees: string[] = [];
  private obj: requestErrorObj;

  //readOnly는 생성자에서만 초기화되며 같은 클래스내 메서드에서도 수정 불가함
  constructor(public readonly name: string, public id: string) {
    this.obj = { name: this.name, id: this.id, employees: this.employees };
  }

  method(this: requestError) {
    console.log(this.obj);
  }

  addEmployess(employee: string) {
    this.employees.push(employee);
  }

  printEloyess() {
    console.log(this.employees);
  }

  getter() {
    return this.obj;
  }
}

//자식
class it extends requestError {
  admin: string[];
  constructor(id: string, public admins: string[]) {
    super("test", id);
    this.admin = admins;
  }
}

const accounting = new requestError("hyunmin", "phm6530");

const te = new it("squirrel39", ["hanam"]);
console.log(te);
