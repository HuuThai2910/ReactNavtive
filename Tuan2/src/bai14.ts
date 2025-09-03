export const tripleNumber = async (num: number): Promise<number> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 3);
        }, 1000);
    });
};

tripleNumber(10).then((result) => console.log(result));
