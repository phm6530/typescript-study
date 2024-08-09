//함수 리턴값 추론
type ArritemType<T> = T extends (...arg: any[]) => infer R ? R : never;
type TestInfer = ArritemType<typeof returnInfer>;

const returnInfer = () => {
  const arr = [1, "string"];
  return arr;
};

//배열 값 추론
type ArrType<T> = T extends (infer E)[] ? E : never;
const inferArr = [1, "string"];
const booleanConst: ArrType<typeof inferArr> = "String";
