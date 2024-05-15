// void는 아무것도 반환하지않고
type Target = (a: number | string, b: number) => void;

let names = "test";

names = "g";

const some: Target = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b;
  }
};

const test = some(1, 5);
