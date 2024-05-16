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
//부모
var requestError = /** @class */ (function () {
    //readOnly는 생성자에서만 초기화되며 같은 클래스내 메서드에서도 수정 불가함
    function requestError(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
        this.obj = { name: this.name, id: this.id, employees: this.employees };
    }
    requestError.prototype.method = function () {
        console.log(this.obj);
    };
    requestError.prototype.addEmployess = function (employee) {
        this.employees.push(employee);
    };
    requestError.prototype.printEloyess = function () {
        console.log(this.employees);
    };
    requestError.prototype.getter = function () {
        return this.obj;
    };
    return requestError;
}());
//자식
var it = /** @class */ (function (_super) {
    __extends(it, _super);
    function it(id, admins) {
        var _this = _super.call(this, "test", id) || this;
        _this.admins = admins;
        _this.admin = admins;
        return _this;
    }
    return it;
}(requestError));
var accounting = new requestError("hyunmin", "phm6530");
var te = new it("squirrel39", ["hanam"]);
console.log(te);
