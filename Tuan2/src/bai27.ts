async function fetchWithRetry(url: string, retries: number): Promise<any> {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url);
            return await response.json();
        } catch (err) {
            if (i === retries - 1)
                throw new Error(`Failed after ${retries} retries`);
            console.log(`Retrying... Attempt ${i + 2}`);
        }
    }
}
fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3)
    .then((data) => console.log("Fetched with retry:", data))
    .catch((err) => console.log(`Error: ${err.message}`));
