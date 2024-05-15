var printName = function (obj) {
    return obj;
};
var test = printName({ firstName: "Park", lastName: "hyunmin" });
console.log(test);
var combine = function (n1, n2) {
    return n1 + n2;
};
var myNumber = combine(1, 2);
console.log(myNumber);
var tester;
tester = combine;
var a = tester(1, 2);
console.log(a);
