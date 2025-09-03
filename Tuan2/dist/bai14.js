"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tripleNumber = void 0;
const tripleNumber = async (num) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 3);
        }, 1000);
    });
};
exports.tripleNumber = tripleNumber;
(0, exports.tripleNumber)(10).then((result) => console.log(result));
