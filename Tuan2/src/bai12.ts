import { simulateTask } from "./bai5";

const runTask = async (): Promise<void> => {
    const result = await simulateTask(2000);
    console.log(result);
};

runTask();
