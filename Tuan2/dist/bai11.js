"use strict";
var promise11 = async () => {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello Async");
        }, 2000);
    });
};
promise11().then((result) => console.log(result));
