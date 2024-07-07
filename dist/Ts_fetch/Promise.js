"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fetchFunc = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const url = "fetch";
        // const response = await fetch(url);
        // return response.json();
        const result = yield new Promise((resolve) => setTimeout(() => {
            resolve({ message: "성공", resData: "string" });
        }, 3000));
        return result;
    }
    catch (error) {
        throw error;
    }
});
const requestData = {
    name: "hyunmin",
    age: 123,
};
const executeFetch = () => __awaiter(void 0, void 0, void 0, function* () { return fetchFunc(requestData); });
executeFetch()
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
//# sourceMappingURL=Promise.js.map