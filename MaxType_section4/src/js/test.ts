class School {
  static year = 2020;
  constructor(public name: string) {}

  static print() {
    console.log(`School static year: ${this.year}`);
  }

  // 인스턴스 메서드
  getName() {
    console.log(`School name: ${this.name}`);
  }
}

class Mept extends School {
  public num = 2;
  static num = 2;

  constructor(public name: string, public classNum: number) {
    super(name);
  }

  // 정적 메서드를 숨기기(덮어쓰기)
  static print() {
    console.log(`Mept static num: ${this.num}`);
  }

  // 인스턴스 메서드
  getClassNum() {
    console.log(`Class number: ${this.classNum}`);
  }
}

// 정적 메서드 호출
School.print(); // 출력: School static year: 2020
Mept.print(); // 출력: Mept static num: 2
