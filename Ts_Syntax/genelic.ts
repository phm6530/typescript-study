/**
 * @param te
 * boolean인데도 기본 값이 true가 반영안되는 이유는
 * never 때문, never는 모든 타입에 반영이 가능하고,
 * 타입스크립트는 never 타입의 반영 조차 엄격하게 관리한다.
 *
 */

const te = <T>(arg: T = true as unknown as T) => {
  return arg;
};

console.log(te());
