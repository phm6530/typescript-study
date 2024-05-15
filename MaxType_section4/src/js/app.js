"use strict";
var requestError = /** @class */ (function () {
    function requestError(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
        this.obj = {};
    }
    requestError.prototype.method = function () {
        this.obj = { name: this.name, id: this.id, employees: this.employees };
        console.log(this.obj);
    };
    requestError.prototype.addEmployess = function (employee) {
        this.employees.push(employee);
    };
    requestError.prototype.printEloyess = function () {
        console.log(this.employees);
    };
    return requestError;
}());
var accounting = new requestError("hyunmin", "phm6530");
accounting.method();
