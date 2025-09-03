export interface User {
    id: number;
    name: string;
}

export const fetchUser = async (id: number): Promise<User> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id, name: `User ${id}` }), 1000);
    });
};
fetchUser(1).then((user) => console.log(user));
