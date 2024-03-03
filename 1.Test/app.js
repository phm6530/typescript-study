var conbine = function (a, b, literal) {
    if (literal === 'me') {
        if (typeof a === 'number' && typeof b === 'number') {
            var result = a + b;
            console.log(result);
            return result;
        }
        else {
            var result = '' + a + b;
            console.log(result);
            return result;
        }
    }
    else {
        console.log('권한이 없습니다.');
    }
};
conbine('5', 2, 'me');
var obj = {
    name: '50',
    age: 30
};
var user = {
    name: 'Hyunmin',
    age: 34
};
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
greet(user); // 올바르게 user 객체 전달
// isOlder 함수 사용 예시 (선택적)
var isUserOlder = isOlder(user, 30);
console.log(isUserOlder); // user의 나이가 30보다 큰지 비교 결과 출력
