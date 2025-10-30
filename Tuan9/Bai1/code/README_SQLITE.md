# 📱 Hướng dẫn sử dụng SQLiteProvider

## 🎯 Tổng quan

Dự án đã được cấu hình để sử dụng `SQLiteProvider` từ `expo-sqlite` - một cách tiếp cận hiện đại và được khuyến nghị để quản lý SQLite database trong React Native/Expo.

## 🏗️ Cấu trúc

### 1. **Provider Setup** (`app/_layout.tsx`)

```tsx
import { SQLiteProvider } from "expo-sqlite";
import { initDB } from "../database";

export default function RootLayout() {
    return (
        <SQLiteProvider databaseName="tasks.db" onInit={initDB}>
            {/* Your app components */}
        </SQLiteProvider>
    );
}
```

### 2. **Database Functions** (`database.ts`)

Tất cả các hàm nhận `db` instance làm tham số đầu tiên:

```typescript
export async function getTasks(db: SQLiteDatabase): Promise<Task[]>;
export async function addTask(db: SQLiteDatabase, text: string);
export async function toggleTask(db: SQLiteDatabase, id: number, done: boolean);
export async function deleteTask(db: SQLiteDatabase, id: number);
export async function updateTask(db: SQLiteDatabase, id: number, text: string);
```

### 3. **Sử dụng trong Components**

```tsx
import { useSQLiteContext } from "expo-sqlite";
import { getTasks, addTask } from "../database";

export default function MyComponent() {
    const db = useSQLiteContext(); // Lấy database instance

    const loadData = async () => {
        const tasks = await getTasks(db);
        // Xử lý dữ liệu
    };

    const saveData = async (text: string) => {
        await addTask(db, text);
        await loadData(); // Reload data
    };
}
```

## ✨ Ưu điểm của SQLiteProvider

1. **🔄 Context API**: Database instance được chia sẻ qua React Context
2. **🎯 Type-safe**: Hỗ trợ TypeScript đầy đủ
3. **⚡ Performance**: Tối ưu hóa kết nối database
4. **🧹 Clean code**: Không cần quản lý database instance thủ công
5. **🔒 Thread-safe**: Xử lý đồng bộ tự động

## 🚀 Các tính năng có sẵn

-   ✅ Khởi tạo database tự động khi app start
-   ✅ CRUD operations đầy đủ (Create, Read, Update, Delete)
-   ✅ Type-safe queries với TypeScript
-   ✅ Error handling tích hợp
-   ✅ Async/await support

## 📝 Ví dụ sử dụng

### Thêm task mới

```tsx
const db = useSQLiteContext();
await addTask(db, "Learn React Native");
```

### Lấy danh sách tasks

```tsx
const db = useSQLiteContext();
const tasks = await getTasks(db);
```

### Cập nhật trạng thái task

```tsx
const db = useSQLiteContext();
await toggleTask(db, taskId, true);
```

### Xóa task

```tsx
const db = useSQLiteContext();
await deleteTask(db, taskId);
```

## 🛠️ Mở rộng

Để thêm table mới, cập nhật hàm `initDB` trong `database.ts`:

```typescript
export async function initDB(db: SQLiteDatabase) {
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS tasks (...);
        CREATE TABLE IF NOT EXISTS categories (...);
        CREATE TABLE IF NOT EXISTS users (...);
    `);
}
```

## 📚 Tài liệu tham khảo

-   [Expo SQLite Documentation](https://docs.expo.dev/versions/latest/sdk/sqlite/)
-   [SQLite Provider Guide](https://docs.expo.dev/versions/latest/sdk/sqlite/#sqliteprovider)
