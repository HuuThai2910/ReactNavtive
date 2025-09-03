import { fetchUser, User } from "./bai18";

async function fetchWithTimeout(id: number): Promise<User> {
    const timeout = new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error("Request timed out")), 2000);
    });
    return Promise.race([fetchUser(id), timeout]);
}
fetchWithTimeout(1)
    .then((user) => console.log("User with timeout:", user))
    .catch((err) => console.log(`Error: ${err.message}`));
