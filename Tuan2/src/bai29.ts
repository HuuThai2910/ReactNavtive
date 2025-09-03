import { simulateTask } from "./bai5";

async function queueProcess(): Promise<void> {
  const tasks = [1000, 1500, 2000, 2500, 3000];
  const results: string[] = [];
  for (const time of tasks) {
    const result = await simulateTask(time);
    results.push(result);
  }
  console.log("Queue results:", results);
}
queueProcess();