Promise.resolve(2)
  .then((result) => console.log("Result: " + result * result))
  .catch(() => console.log("Error"))
  .finally(() => console.log("Done"));
