import * as SQLite from "expo-sqlite";
import { Order, OrderItem } from "../types";

const DB_NAME = "cafe_orders.db";

export class DatabaseService {
    private static db: SQLite.SQLiteDatabase | null = null;

    static async init(): Promise<void> {
        try {
            this.db = await SQLite.openDatabaseAsync(DB_NAME);
            await this.createTables();
        } catch (error) {
            console.error("Error initializing database:", error);
            throw error;
        }
    }

    private static async createTables(): Promise<void> {
        if (!this.db) throw new Error("Database not initialized");

        await this.db.execAsync(`
      CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        orderId TEXT NOT NULL,
        type TEXT NOT NULL,
        total REAL NOT NULL,
        createdAt TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS order_items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        orderId INTEGER NOT NULL,
        drinkId TEXT NOT NULL,
        drinkName TEXT NOT NULL,
        drinkImage TEXT NOT NULL,
        price REAL NOT NULL,
        quantity INTEGER NOT NULL,
        FOREIGN KEY (orderId) REFERENCES orders (id)
      );
    `);
    }

    static async addOrder(order: Order): Promise<number> {
        if (!this.db) throw new Error("Database not initialized");

        try {
            const result = await this.db.runAsync(
                "INSERT INTO orders (orderId, type, total, createdAt) VALUES (?, ?, ?, ?)",
                [order.orderId, order.type, order.total, order.createdAt]
            );

            const orderId = result.lastInsertRowId;

            for (const item of order.items) {
                await this.db.runAsync(
                    "INSERT INTO order_items (orderId, drinkId, drinkName, drinkImage, price, quantity) VALUES (?, ?, ?, ?, ?, ?)",
                    [
                        orderId,
                        item.drinkId,
                        item.drinkName,
                        item.drinkImage,
                        item.price,
                        item.quantity,
                    ]
                );
            }

            return orderId;
        } catch (error) {
            console.error("Error adding order:", error);
            throw error;
        }
    }

    static async getAllOrders(): Promise<Order[]> {
        if (!this.db) throw new Error("Database not initialized");

        try {
            const orders = await this.db.getAllAsync<any>(
                "SELECT * FROM orders ORDER BY createdAt DESC"
            );

            const ordersWithItems: Order[] = [];

            for (const order of orders) {
                const items = await this.db.getAllAsync<OrderItem>(
                    "SELECT drinkId, drinkName, drinkImage, price, quantity FROM order_items WHERE orderId = ?",
                    [order.id]
                );

                ordersWithItems.push({
                    id: order.id,
                    orderId: order.orderId,
                    type: order.type,
                    items: items,
                    total: order.total,
                    createdAt: order.createdAt,
                });
            }

            return ordersWithItems;
        } catch (error) {
            console.error("Error getting orders:", error);
            throw error;
        }
    }

    static async deleteOrder(id: number): Promise<void> {
        if (!this.db) throw new Error("Database not initialized");

        try {
            await this.db.runAsync(
                "DELETE FROM order_items WHERE orderId = ?",
                [id]
            );
            await this.db.runAsync("DELETE FROM orders WHERE id = ?", [id]);
        } catch (error) {
            console.error("Error deleting order:", error);
            throw error;
        }
    }

    static async clearAllOrders(): Promise<void> {
        if (!this.db) throw new Error("Database not initialized");

        try {
            await this.db.execAsync(`
        DELETE FROM order_items;
        DELETE FROM orders;
      `);
        } catch (error) {
            console.error("Error clearing orders:", error);
            throw error;
        }
    }
}
