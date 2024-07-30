type MyRecord<K extends keyof any, T> = {
  [P in K]: T;
};

type PersonProps = {
  name: string;
  age: number;
  job: number;
};

const person: MyRecord<PersonProps, string | number | symbol> = {
  name: "hyunmin",
  age: 454,
};
