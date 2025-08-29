import { promise1 } from "./bai1";
import { promise2 } from "./bai2";
import { promise3 } from "./bai3";

Promise.race([promise1, promise2(), promise3()])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error);
  });
