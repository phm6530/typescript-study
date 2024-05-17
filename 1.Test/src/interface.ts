/**
  Interface
  객체에만 적용
  개별 속성에 유니온 타입 적용 가능, 그러나 인터페이스 자체는 유니온 타입을 지원하지 않음
  상속 확장 가능 (class 구문처럼)

  Type
  교차 타입(&)을 사용하여 확장 가능
  선언 타입에 제약이 없음 (유연한 선언 가능)

  객체 타입 선언
  인터페이스가 유리함
 */

type Point =
  | {
      x: number;
      y: number;
    }
  | { x: string; y?: string };

const thomas = (lastName: string): string => {
  const name = "park";
  return name + lastName;
};

const testi = thomas("hyunmin");
console.log(testi);

interface tess {
  name: string;
  methdd(): string;
}

const objj: tess = {
  name: "ggg",
  methdd: () => {
    return "gi!";
  },
};

interface one {
  name: string;
}

interface two extends one {
  age: number;
}

const obja: one = {
  name: "gg",
};

const objb: two = {
  name: "gg",
  age: 1,
};
