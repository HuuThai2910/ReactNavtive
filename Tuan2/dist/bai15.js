"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai14_1 = require("./bai14");
const async15 = async () => {
    const result1 = await (0, bai14_1.tripleNumber)(15);
    const result2 = await (0, bai14_1.tripleNumber)(result1);
    console.log("Results: ", result1, result2);
};
async15();
