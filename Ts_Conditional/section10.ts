/**
 * 조건부 타입
 */
type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

/**
 * 조건부 타입
 * string <-> number
 */
type TransformType<T> = T extends number ? string : number;
let varA: TransformType<number>;
let varB: TransformType<string>;

/**
 *
 * @param text
 * 오버로딩 시그니처
 */

function removeSpace<T extends string>(
  text: T
): T extends string ? string : never;
function removeSpace(text: any) {
  return text.trim();
}

let result = removeSpace("hi my names");

export {};
