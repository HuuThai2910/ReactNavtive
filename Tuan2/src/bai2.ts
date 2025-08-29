export var promise2 = (): Promise<Number> => {
   return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}
promise2().then(result => console.log(result))