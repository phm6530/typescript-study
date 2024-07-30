//Pick
type UserProps = {
  name: string; //가져올 값
  age?: number;
  married?: boolean;
};

const userLiteral: Pick<UserProps, "name" | "age"> = { name: "hi!" };
const userName: Pick<UserProps, "name">["name"] = "hyunmin";

//My Pick
type MyPicks<T, K extends keyof T> = {
  [P in K]: T[P];
};
const userLiterals: MyPick<UserProps, "name" | "age"> = {
  name: "hi!",
  age: 55,
};

type testRequired<T, K extends keyof T> = {
  [P in K]-?: T[P];
} & T;

const objss: testRequired<UserProps, "married"> = {
  name: "ff",
  married: true,
};

type MyPartialRequired<T, K extends keyof T> = {
  [P in K]-?: T[P];
} & T;

const ob: MyPartialRequired<UserProps, "age"> = {
  name: "11",
  age: 1,
};
