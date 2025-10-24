import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("tasks.db");

export const initDB = async () => {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      text TEXT NOT NULL,
      done INTEGER DEFAULT 0
    );
  `);
};


export const getTasks = async () => {
  return await db.getAllAsync("SELECT * FROM tasks");
};

export const addTask = async (text: string) => {
  await db.runAsync("INSERT INTO tasks (text, done) VALUES (?, ?)", [text, 0]);
};

export const toggleTask = async (id: number, done: boolean) => {
  await db.runAsync("UPDATE tasks SET done = ? WHERE id = ?", [done ? 1 : 0, id]);
};
