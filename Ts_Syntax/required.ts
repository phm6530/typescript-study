type RequredUser = Required<UserProp>;

//전체 필수로 변경
const objs: RequredUser = {
  name: "hh",
  age: 11,
  married: true,
};

//Married만 가져오면서 필수로변경
type PickRequredUser = Required<Pick<UserProp, "married">>;

const objPick: PickRequredUser = {
  married: true,
};

//기본 타입 유지하면서 married만 필수로 변경
type MyRequired<T, K extends keyof T> = {
  [P in K]-?: T[P];
} & T;

const objPicks: MyRequired<UserProps, "age" | "married"> = {
  name: "sts",
  age: 111,
};
