import { simulateTask } from "./bai5";

async function batchProcess(): Promise<void> {
    const tasks = [
        simulateTask(1000),
        simulateTask(1500),
        simulateTask(2000),
        simulateTask(2500),
        simulateTask(3000),
    ];
    const results = await Promise.all(tasks);
    console.log("Batch results:", results);
}
batchProcess();
