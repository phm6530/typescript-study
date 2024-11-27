/**
 * Exclude
 */

type MyExclude<T, U> = T extends U ? never : T;
type MyExtract<T, U> = T extends U ? T : never;

function tests() {
  return 1;
}

type MyReturnType<T extends (arg: any) => any> = T extends (arg: any) => infer R
  ? R
  : never;

type test = MyReturnType<typeof tests>;

export {};
