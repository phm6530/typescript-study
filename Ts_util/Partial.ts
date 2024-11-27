/**
 * partial
 */

interface Test {
  name: string;
  age: number;
}

type Keys = keyof Test;

let obj: Keys = "age";

type MPartial<T, K extends keyof T> = {
  [P in K]?: T[P];
} & Omit<T, K>;
type tests = MPartial<Test, "age">;

type MPartialSimplified<T, K extends keyof T> = {
  [P in K]?: T[P]; // 선택적으로 만들 속성
} & {
  [P in Exclude<keyof T, K>]: T[P]; // 나머지 속성 유지
};

type Result = MPartialSimplified<Test, "age" | "name">;

type MyReadOnly<T> = {
  readonly [key in keyof T]: T[key];
};

type MyParital<T> = {
  [key in keyof T]?: T[key];
};

type MyRequired<T> = {
  [key in keyof T]-?: T[key];
};

export = {};
