"use strict";
Promise.resolve([1, 2, 3, 4, 5]).then((array) => {
    setTimeout(() => {
        array.filter((number) => {
            number % 2 == 0 ? console.log(number) : "";
        });
    }, 1000);
});
