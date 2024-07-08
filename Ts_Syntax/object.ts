/**
 * {}은 원시형까지 포함하며 객체, 원시형에 타입 할당가능함
 * 대신 객체에 할당은 가능하지만, 사용할순없음
 * 쓸모없는 타입이라고 이야기도 많음
 */

const obj1: {} = { name: "hi!" }; //ok
const str: {} = "hi!"; //ok
const int: {} = 1;

//console.log(obj1.name); // 사용 불가함

// 대체방법으로 시그니처 인덱스를 사용하는것이 좋음

// 시그니처 1
const obj2: { [key: string]: number } = {};
const resultObj = { ...obj2, ...{ name: "hhh" } };

// 시그니처 2
interface ComplexObject {
  [key: string]: string | number | boolean | string[] | number[];
}

const complexObj: ComplexObject = {
  name: "Alice",
  age: 30,
  isActive: true,
  hobbies: ["reading", "swimming"],
  scores: [95, 82, 75],
};
