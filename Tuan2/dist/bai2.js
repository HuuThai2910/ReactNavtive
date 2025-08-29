"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promise2 = void 0;
var promise2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
};
exports.promise2 = promise2;
(0, exports.promise2)().then(result => console.log(result));
