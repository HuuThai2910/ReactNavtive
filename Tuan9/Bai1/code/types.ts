export type Task = {
    id: number;
    text: string;
    done: number; // SQLite uses 0/1 for boolean
};
