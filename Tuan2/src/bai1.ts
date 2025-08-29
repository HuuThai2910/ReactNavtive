export var promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello Async");
  }, 2000);
});
promise1.then(result => console.log(result))

