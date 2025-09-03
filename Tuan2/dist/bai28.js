"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai5_1 = require("./bai5");
async function batchProcess() {
    const tasks = [
        (0, bai5_1.simulateTask)(1000),
        (0, bai5_1.simulateTask)(1500),
        (0, bai5_1.simulateTask)(2000),
        (0, bai5_1.simulateTask)(2500),
        (0, bai5_1.simulateTask)(3000),
    ];
    const results = await Promise.all(tasks);
    console.log("Batch results:", results);
}
batchProcess();
