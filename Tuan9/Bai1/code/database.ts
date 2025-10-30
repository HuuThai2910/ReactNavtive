import * as SQLite from "expo-sqlite";
import { Task } from "./types";

// Khởi tạo database schema
export async function initDB(db: SQLite.SQLiteDatabase) {
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            text TEXT NOT NULL,
            done INTEGER DEFAULT 0
        );
    `);
}

// Lấy danh sách tasks
export async function getTasks(db: SQLite.SQLiteDatabase): Promise<Task[]> {
    return await db.getAllAsync<Task>("SELECT * FROM tasks");
}

// Thêm task mới
export async function addTask(db: SQLite.SQLiteDatabase, text: string) {
    await db.runAsync("INSERT INTO tasks (text, done) VALUES (?, ?)", [
        text,
        0,
    ]);
}

// Toggle trạng thái task
export async function toggleTask(
    db: SQLite.SQLiteDatabase,
    id: number,
    done: boolean
) {
    await db.runAsync("UPDATE tasks SET done = ? WHERE id = ?", [
        done ? 1 : 0,
        id,
    ]);
}

// Xóa task
export async function deleteTask(db: SQLite.SQLiteDatabase, id: number) {
    await db.runAsync("DELETE FROM tasks WHERE id = ?", [id]);
}

// Cập nhật nội dung task
export async function updateTask(
    db: SQLite.SQLiteDatabase,
    id: number,
    text: string
) {
    await db.runAsync("UPDATE tasks SET text = ? WHERE id = ?", [text, id]);
}
