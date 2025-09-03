import { tripleNumber } from "./bai14";

const async16 = async (): Promise<void> => {
    const results = await Promise.all([
        tripleNumber(2),
        tripleNumber(3),
        tripleNumber(4),
    ]);
    console.log("Parallel results:", results);
};

async16();
