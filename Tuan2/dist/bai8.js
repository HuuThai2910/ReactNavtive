"use strict";
Promise.resolve(2)
    .then((data) => {
    const result = data * data;
    console.log(result);
    return result;
})
    .then((data) => {
    const result = data * 2;
    console.log(result);
    return result;
})
    .then((data) => {
    const result = data + 5;
    console.log(result);
    return result;
});
