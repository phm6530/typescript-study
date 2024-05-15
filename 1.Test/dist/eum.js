"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
const person = {
    name: "hyunmin",
    age: 34,
    hobbies: ["Coding", "javaSciprt"],
    role: Role.ADMIN,
};
if (Role.ADMIN === person.role) {
    console.log("나는 admin 입니다.");
}
//# sourceMappingURL=eum.js.map