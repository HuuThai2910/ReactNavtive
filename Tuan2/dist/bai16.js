"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai14_1 = require("./bai14");
const async16 = async () => {
    const results = await Promise.all([
        (0, bai14_1.tripleNumber)(2),
        (0, bai14_1.tripleNumber)(3),
        (0, bai14_1.tripleNumber)(4),
    ]);
    console.log("Parallel results:", results);
};
async16();
