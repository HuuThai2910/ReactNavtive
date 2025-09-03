"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai18_1 = require("./bai18");
async function fetchUsers(ids) {
    const users = await Promise.all(ids.map((id) => (0, bai18_1.fetchUser)(id)));
    return users;
}
fetchUsers([1, 2, 3]).then((users) => console.log("Users:", users));
