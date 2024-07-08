/**
 *@param func
 * 유니언 타입일때 void를 해도 엄격히 검사함
 * 만약 ()=>void 였으면 무시해버림
 *
 * void는 반환값을 사용하지 못하도록 제한 하거나
 * 반환값을  사용 하지 않는 콜백함수 타입을 무시할때 사용한다.
 *
 * @param
 */

const func = <T>(data: T): unknown => {
  try {
    if (typeof data === "string") {
      return data;
    }
    if (typeof data === "number") {
      return data.toString();
    }
    throw new Error("알 수 없는 데이터 타입");
  } catch (error) {
    return (error as Error).message;
  }
};

console.log(func(true));

type Callback = () => void;

const logMessage: Callback = () => {
  console.log("This is a message.");
  return 1;
};

logMessage();
const result = logMessage();
console.log(result === undefined);

function doSomething(): void {
  console.log("Doing something");
  // 반환값 없음
}

function callMeMaybe(callback: () => void) {
  callback();
  return; // 명시적으로 undefined를 반환
}

console.log(callMeMaybe(doSomething));
