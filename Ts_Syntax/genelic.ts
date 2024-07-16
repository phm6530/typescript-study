/**
 * @param te
 * boolean인데도 기본 값이 true가 반영안되는 이유는
 * never 때문, never는 모든 타입에 반영이 가능하고,
 * 타입스크립트는 never 타입의 반영 조차 엄격하게 관리한다.
 *
 */

//원시형의 경우 자료형만 check 하지만 never일 가능성이 있기때문에 T로 단언
const te = <T extends string>(arg: T = "string" as T): T => arg;
te();

console.log(te());

interface v {
  value: string;
}

//obj의 경우는 제약 최소를 만족시켜야함
const tes = <T extends v>(obj: T): T => {
  return obj;
};
tes({ value: "값", value1: "값2" });

/**튜플의 은 각 튜플에 대한 자료형만 판단 함 원시형과 동일
 * 2개의 튜플을 받는데 3개들어가면 오류남
 *
 */
type TupleA = [string, number];
const processTuple = <T extends TupleA>(tuple: T): T => {
  return tuple;
};

const result1 = processTuple(["hello", 42]); // ["hello", 42]

/**
 * 튜플을 제네릭을 이용해서 동적으로 받으려면 단언해줘야함
 */

type Tuple = [string, number];

function withDefaultTuple<T extends Tuple>(tuple: T = ["default", 0] as T): T {
  return tuple;
}

// console.log(withDefaultTuple(["hello", 42, "push"])); // ["hello", 42" , "push"]

type d = { name: string };

interface b extends d {
  hobby: string;
  age: number;
}

const e = <T extends b>(arg: T): T => {
  return arg;
};

const oo = {
  name: "ggg",
  hobby: "ggg",
  age: 1,
  test: "asdf",
};

e(oo);

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

const object = { value: "hi!" };
getProperty(object, "value");
