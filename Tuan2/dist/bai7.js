"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai2_1 = require("./bai2");
const bai3_1 = require("./bai3");
Promise.race([bai1_1.promise1, (0, bai2_1.promise2)(), (0, bai3_1.promise3)()])
    .then((values) => {
    console.log(values);
})
    .catch((error) => {
    console.error(error);
});
