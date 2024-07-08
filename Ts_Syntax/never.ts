//void로 추론
function never1() {
  throw new Error("예외!");
}

//never로 추론
const neverType = () => {
  throw new Error("never 에러");
};

function exampleFunction(data: string | number): string {
  try {
    if (typeof data === "string") {
      return data;
    } else if (typeof data === "number") {
      return data.toString();
    } else {
      // 논리적으로 도달할 수 없는 코드, 예외가 발생함 (never 타입으로 간주됨)
      return neverType();
    }
  } catch (error) {
    // 예외 메시지를 string으로 반환
    return (error as Error).message;
  }
}

// 올바른 호출
console.log(exampleFunction("hello")); // 출력: hello
console.log(exampleFunction(42)); // 출력: 42

// 잘못된 호출 - 컴파일 오류 발생
// console.log(typeof exampleFunction(true));
