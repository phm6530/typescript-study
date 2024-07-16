//User
interface User {
  name?: string;
  age?: number;
}

//전부 required 처리
const user: Required<User> = {
  name: "111",
  age: 30,
};

//전부 옵셔널처리
const userOb: Partial<User> = {};

//객체 속성 리터럴 선택
const test: Pick<User, "name"> = {
  name: "aaa",
};
