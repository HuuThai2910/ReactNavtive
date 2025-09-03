"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai14_1 = require("./bai14");
const async17 = async () => {
    const results = await Promise.all([
        (0, bai14_1.tripleNumber)(2),
        (0, bai14_1.tripleNumber)(3),
        (0, bai14_1.tripleNumber)(4),
    ]);
    for await (const result of results) {
        console.log(result);
    }
};
async17();
