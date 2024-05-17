"use strict";
let names = "test";
names = "g";
const some = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return a.toString() + b;
    }
};
const test = some(1, 5);
