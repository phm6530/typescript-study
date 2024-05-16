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
var ErrorStatus = /** @class */ (function (_super) {
    __extends(ErrorStatus, _super);
    function ErrorStatus(status, message) {
        var _this = _super.call(this, message) || this;
        _this.status = status;
        _this.name = _this.constructor.name;
        Error.captureStackTrace(_this, _this.constructor);
        return _this;
    }
    return ErrorStatus;
}(Error));
var NotFoundError = /** @class */ (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError(message) {
        return _super.call(this, 404, message) || this;
    }
    return NotFoundError;
}(ErrorStatus));
var ValidationError = /** @class */ (function (_super) {
    __extends(ValidationError, _super);
    function ValidationError(message) {
        return _super.call(this, 400, message) || this;
    }
    return ValidationError;
}(ErrorStatus));
var AuthenticationError = /** @class */ (function (_super) {
    __extends(AuthenticationError, _super);
    function AuthenticationError(message, name) {
        var _this = _super.call(this, 401, message) || this;
        _this.name = name;
        return _this;
    }
    return AuthenticationError;
}(ErrorStatus));
var notFoundError = new NotFoundError("Resource not found");
var validationError = new ValidationError("Invalid input data");
var authenticationError = new AuthenticationError("Authentication failed", "에러이름!");
var fetchs = function (int) {
    try {
        throw new Error();
        return result;
    }
    catch (error) {
        var err = new NotFoundError("에러!!!!!");
        return err;
    }
};
var gg = 1;
var result = fetchs(gg);
console.log(result); // NotFoundError: 에러!!!!!
