import { tripleNumber } from "./bai14";

const async17 = async (): Promise<void> => {
    const results = await Promise.all([
        tripleNumber(2),
        tripleNumber(3),
        tripleNumber(4),
    ]);
    for await (const result of results) {
        console.log(result);
    }
};

async17();
