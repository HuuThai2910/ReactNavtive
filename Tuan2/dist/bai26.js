"use strict";
async function waitFiveSeconds() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Waited 5 seconds");
}
waitFiveSeconds();
