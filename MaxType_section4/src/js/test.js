"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var School = /** @class */ (function () {
    function School(name) {
        this.name = name;
    }
    School.print = function () {
        console.log("School static year: ".concat(this.year));
    };
    // 인스턴스 메서드
    School.prototype.getName = function () {
        console.log("School name: ".concat(this.name));
    };
    School.year = 2020;
    return School;
}());
var Mept = /** @class */ (function (_super) {
    __extends(Mept, _super);
    function Mept(name, classNum) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.classNum = classNum;
        _this.num = 2;
        return _this;
    }
    // 정적 메서드를 숨기기(덮어쓰기)
    Mept.print = function () {
        console.log("Mept static num: ".concat(this.num));
    };
    // 인스턴스 메서드
    Mept.prototype.getClassNum = function () {
        console.log("Class number: ".concat(this.classNum));
    };
    Mept.num = 2;
    return Mept;
}(School));
// 정적 메서드 호출
School.print(); // 출력: School static year: 2020
Mept.print(); // 출력: Mept static num: 2
