"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai5_1 = require("./bai5");
const runTask = async () => {
    const result = await (0, bai5_1.simulateTask)(2000);
    console.log(result);
};
runTask();
