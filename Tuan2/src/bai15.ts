import { tripleNumber } from "./bai14";

const async15 = async (): Promise<void> => {
    const result1 = await tripleNumber(15);
    const result2 = await tripleNumber(result1);
    console.log("Results: ", result1, result2);
};

async15();
