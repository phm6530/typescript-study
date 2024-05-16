"use strict";
//싱글톤 패턴
var SingleTon = /** @class */ (function () {
    // 생성막기
    function SingleTon() {
        this.num = 0;
    }
    SingleTon.prototype.incrementNum = function () {
        this.num += 1;
    };
    SingleTon.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new SingleTon();
        return this.instance;
    };
    return SingleTon;
}());
//인스턴스 생성
var singleton = SingleTon.getInstance();
singleton.incrementNum();
singleton.incrementNum();
singleton.incrementNum();
singleton.incrementNum();
singleton.incrementNum();
singleton.incrementNum();
var singleTonFunc = (function () {
    var instance;
    var num = 0;
    var createInstance = function () {
        return {
            getNum: function () {
                return num;
            },
            increment: function () {
                num++;
            },
        };
    };
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
    };
})();
var test = singleTonFunc.getInstance();
test.increment();
test.increment();
test.increment();
test.increment();
console.log(test.getNum());
