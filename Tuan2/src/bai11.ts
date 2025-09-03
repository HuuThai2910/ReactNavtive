var promise11 = async (): Promise<string> => {
    return await new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello Async");
        }, 2000);
    });
};

promise11().then((result) => console.log(result));
