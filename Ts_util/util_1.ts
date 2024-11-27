interface Person {
  name: string;
  age: number;
  job: string;
}

/**
 * Parital Pick..
 */

type PickPartial<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>;
type tests = PickPartial<Person, "age" | "job">;
const obj: tests = {
  name: "ddd",
  job: "ddd",
};

type OmitType<T, K extends keyof T> = {
  [key in keyof T]: string;
};

type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type TestT = MyOmit<Person, "age">;

/**
 * Exclude는 Union을 반환함.
 */
type es = Exclude<keyof Person, "age">;
export {};
