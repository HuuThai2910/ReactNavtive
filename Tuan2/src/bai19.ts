import { fetchUser, User } from "./bai18";

async function fetchUsers(ids: number[]): Promise<User[]> {
    const users = await Promise.all(ids.map((id) => fetchUser(id)));
    return users;
}
fetchUsers([1, 2, 3]).then((users) => console.log("Users:", users));
