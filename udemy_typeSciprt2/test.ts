const fn = (num: number, name: string = "hyunmin", isTrue: boolean): string => {
  return `${num}살 ${name} 취업${isTrue}`;
};
let me = fn(34, undefined, true);

const arr = ["이용석", "고자"];
arr.map((e) => {
  return e;
});

//Never 타입??
//PART 1
//함수 작성하기: "twoFer"
//사람의 이름을 매개변수로 받아서 "one for <이름>, one for me"
//형식의 문자열을 반환하는 함수를 작성하세요.
//이름이 제공되지 않은 경우, 기본값으로 "you"를 사용하세요.

const twoFer = (name: string = "you"): string => {
  return `one for ${name}, one for me`;
};
twoFer("hyunmin");

//예시:
//twoFer() => "One for you, one for me"
//twoFer("Elton") => "One for Elton, one for me"

//PART 2
//함수 작성하기: "isLeapYear"
//연도를 매개변수로 받아서 윤년인지 아닌지를 true/false로 반환하는 함수를 작성하세요.

const isLeapYear = (num: number): boolean => {
  return (num % 4 === 0 && num % 100 !== 0) || num % 400 === 0;
};
isLeapYear(2024);

//윤년 판단 규칙:
//연도가 4의 배수이면서 100의 배수가 아닐 때
//또는
//연도가 400의 배수일 때
//힌트: modulo(%) 연산자 사용

//예시:
//isLeapYear(2012) => true
//isLeapYear(2013) => false
