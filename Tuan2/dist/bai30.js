"use strict";
async function fetchWithAllSettled() {
    const promises = [
        fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => res.json()),
        fetch("https://jsonplaceholder.typicode").then((res) => res.json()),
        fetch("https://jsonplaceholder.typicode.com/todos/3").then((res) => res.json()),
    ];
    const results = await Promise.allSettled(promises);
    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`Request ${index + 1}: Success`, result.value);
        }
        else {
            console.log(`Request ${index + 1}: Failed`, result.reason);
        }
    });
}
fetchWithAllSettled();
