type MyReadOnly<T> = {
  readonly [key in keyof T]: T[key];
};

type MyParital<T> = {
  [key in keyof T]?: T[key];
};

type MyRequired<T> = {
  [key in keyof T]-?: T[key];
};

type MyRecode<K extends keyof any, V> = {
  [key in K]: V;
};

type tests = {
  [key: string]: number;
};

export {};
