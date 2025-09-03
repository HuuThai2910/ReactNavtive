"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai3_1 = require("./bai3");
const handleTryCatch = async () => {
    try {
        await (0, bai3_1.promise3)();
    }
    catch (err) {
        console.log(`${err.message}`);
    }
};
