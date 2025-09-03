export var promise3 = (): Promise<String> => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Something went wrong");
        }, 1000);
    });
};

promise3().catch((err) => console.log(err));
