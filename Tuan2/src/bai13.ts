import { promise3 } from "./bai3";

const handleTryCatch = async (): Promise<void> => {
    try {
        await promise3();
    } catch (err: any) {
        console.log(`${err.message}`);
    }
};
