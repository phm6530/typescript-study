"use strict";
var obj = {
    name: "hhh",
    method: function () {
        console.log(this.name);
    },
};
obj.method();
