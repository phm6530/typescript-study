"use strict";
// Factory Method
var User = /** @class */ (function () {
    function User(name, role) {
        this.name = name;
        this.role = role;
    }
    User.createAdmin = function (name) {
        return new User(name, "Admin");
    };
    User.createGuest = function (name) {
        return new User(name, "Guest");
    };
    return User;
}());
var admin = User.createAdmin("test");
console.log(admin);
var UserFunc = function () {
    return {
        createAdmin: function (name) {
            return { name: name, role: "Admin" };
        },
        createGuest: function (name) {
            return { name: name, role: "Guest" };
        },
    };
};
