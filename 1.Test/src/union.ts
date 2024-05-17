/**
 * 유니온 타입 ?
 * 교합을 말하며 or로 이해하면 편함
 */

//일반함수 반영
type num = string | number | boolean;
const z: num = true;

//객체 유니온 반영
type objTypes = {
  name: string;
  age: number | string;
};
const obj: objTypes = { name: "박현민", age: 3 };

//함수 유니온 반영
const getAge = (age: number | string): void => {
  console.log(age);
};

//유니온 타입 좁히기
const calculator = (pirce: number | string, tax: number): number => {
  if (typeof pirce === "string") {
    pirce = parseFloat(pirce);
  }
  return pirce * tax;
};

//배열 유니온
const arrs: (number | string | boolean)[] = [];

//리터럴 유니온
type genderType = "male" | "female";
const gender = (type: genderType) => {
  console.log(type);
};
gender("male");
