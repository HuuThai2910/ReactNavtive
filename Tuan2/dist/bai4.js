"use strict";
const promise4 = new Promise((resolve) => resolve(Math.random()));
promise4
    .then((result) => console.log(result))
    .catch(() => console.log("Something went wrong"));
