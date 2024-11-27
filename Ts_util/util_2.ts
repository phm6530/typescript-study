type MyReadOnly<T> = {
  readonly [key in keyof T]: T[key];
};

type MyParital<T> = {
  [key in keyof T]?: T[key];
};

type MyRequired<T> = {
  [key in keyof T]-?: T[key];
};

type MyRecode = {};

type tests = {
  [key: string]: number;
};

export {};
