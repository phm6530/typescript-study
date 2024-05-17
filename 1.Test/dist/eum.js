"use strict";
/**
 * enum
 * 명명된 상수 집합을 정의할 수 있다.
 * 예로 useQuery의 key 값 등
 */
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["DELIVERED"] = 1] = "DELIVERED";
})(OrderStatus || (OrderStatus = {}));
const isDeliveresd = (status) => {
    return status === OrderStatus.DELIVERED;
};
console.log(isDeliveresd(OrderStatus.DELIVERED));
