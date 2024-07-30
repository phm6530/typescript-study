type TestPartial<T, K extends keyof T> = {
  [P in K]?: T[P];
} & Omit<T, K>;

type Person = {
  name?: string;
  age: number;
  job: string;
};

type MPartial<T, K extends keyof T> = {
  [P in K]?: T[P];
} & Omit<T, K>;

const persons: MPartial<Person, "job"> = {
  age: 1414,
};

type z = { age?: number };
type x = { age: number };

const num: z & x = {};

console.log(persons);
