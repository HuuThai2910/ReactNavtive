"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai5_1 = require("./bai5");
async function queueProcess() {
    const tasks = [1000, 1500, 2000, 2500, 3000];
    const results = [];
    for (const time of tasks) {
        const result = await (0, bai5_1.simulateTask)(time);
        results.push(result);
    }
    console.log("Queue results:", results);
}
queueProcess();
