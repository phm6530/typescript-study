"use strict";
/**
 * 유니온 타입 ?
 * 교합을 말하며 or로 이해하면 편함
 */
const z = true;
const obj = { name: "박현민", age: 3 };
//함수 유니온 반영
const getAge = (age) => {
    console.log(age);
};
//유니온 타입 좁히기
const calculator = (pirce, tax) => {
    if (typeof pirce === "string") {
        pirce = parseFloat(pirce);
    }
    return pirce * tax;
};
//배열 유니온
const arrs = [];
const gender = (type) => {
    console.log(type);
};
gender("male");
