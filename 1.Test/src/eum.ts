/**
 * enum
 * 명명된 상수 집합을 정의할 수 있다.
 * 예로 useQuery의 key 값 등
 */

enum OrderStatus {
  PENDING,
  DELIVERED,
}

const isDeliveresd = (status: OrderStatus) => {
  return status === OrderStatus.DELIVERED;
};

console.log(isDeliveresd(OrderStatus.DELIVERED));
