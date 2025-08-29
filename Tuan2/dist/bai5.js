"use strict";
var simulateTask = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task done");
        }, time * 1000);
    });
};
simulateTask(2).then((result) => console.log(result));
