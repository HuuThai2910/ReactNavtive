"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai18_1 = require("./bai18");
async function fetchWithTimeout(id) {
    const timeout = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Request timed out")), 2000);
    });
    return Promise.race([(0, bai18_1.fetchUser)(id), timeout]);
}
fetchWithTimeout(1)
    .then((user) => console.log("User with timeout:", user))
    .catch((err) => console.log(`Error: ${err.message}`));
