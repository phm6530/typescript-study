const doThing = (thing: number | string): number | string => {
  return thing;
};

//타입스크립트에서 제네릭(generic)은 들어온 값의 타입을 그대로 유지하면서 리턴 타입도 동일하게 만드는 데 사용 하는 타입정의 기법
//제네릭은 타입스크립트의 타입 시스템을 강화하여 안전한 코드를 유도함
/**
 * 타입 안전성: 제네릭은 컴파일러가 타입을 추론하고 검사할 수 있게 하여, 잘못된 타입 사용을 방지합니다.
  유연성과 재사용성: 제네릭을 사용하면 다양한 타입을 처리할 수 있는 범용적인 코드를 작성할 수 있습니다.
  타입 추론: 제네릭은 컴파일러가 타입을 자동으로 추론할 수 있게 도와줍니다.
 */
const nums: Array<number> = [];
const colors: Array<string> = [];

const identity = <T>(arg: T): T => {
  return arg;
};

//<number>라 적지않아도 타입스크립트는 타입을 추론함
//하지만 DOM요소는 추론 할 수가없기에 명시해줘야함
//제네릭은 리액트 작성시에 <T,> 쉼표를 넣어줘야 오류를 발생시키지 않음

const numberIdentity = identity<number>(221);
console.log(numberIdentity);

const getRandomElement = <Type>(list: Type[]): Type => {
  const randomIdx = Math.floor(Math.random() * list.length);
  return list[randomIdx];
};

const func = <T extends object, U extends object>(object1: T, object2: U) => {
  return Object.assign({}, object1, object2);
};

console.log(func({ name: "1" }, { names: 2 }));

type test = {
  length: number;
};

const func1 = <T extends test>(thing: T): number => {
  return thing.length;
};
// 인수들을 받아서 배열로 만들어주는 메소드
function toArray<T, U>(a: T, b: U): (T | U)[] {
  return [a, b];
}

const toObject = <T>(object_1: T, object_2: T): T => {
  return { ...object_1, ...object_2 };
};
toObject({ name: 1 }, { names: 2 });

const zz = toArray<number, string>(1, "2");

function arrFilter<T extends number>(a: T[]): T[] {
  return [a[0], a[a.length - 1]];
}

const arrNumber: number[] = [1, 2, 3, 4, 5, 6, 7];
const arrString: string[] = ["1", "2", "3", "4", "5", "6", "7"];

const Generic = <T, U>(a: T[], b: U[]): [T, U] => {
  return [a[0], b[1]];
};
const [a, b] = Generic(arrString, arrNumber);
console.log(a, b);
