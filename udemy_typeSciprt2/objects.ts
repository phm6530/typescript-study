const printName = (obj: {
  firstName: string;
  lastName: string;
}): { firstName: string; lastName: string } => {
  return obj;
};

const test = printName({ firstName: "Park", lastName: "hyunmin" });
console.log(test);

const combine = (n1: number, n2: number): number => {
  return n1 + n2;
};

const myNumber = combine(1, 2);
console.log(myNumber);

let tester: Function;
tester = combine;

const a = tester(1, 2);
console.log(a);

// 타입선언
type PointType = {
  x: number;
  y: number;
};

type MyNumber = Number;

const RandomCooridinate = (Point: PointType): PointType => {
  return { x: Point.x * 2, y: Point.y * 2 };
};

const age: MyNumber = 23;

type NameType = {
  name: string;
  age: number;
  address: {
    city: string;
  };
};

const Hyunmin: NameType = {
  name: "박현민",
  age: 34,
  address: {
    city: "HaNam",
  },
};
