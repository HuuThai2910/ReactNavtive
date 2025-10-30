import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { initDB } from "../database";

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <SQLiteProvider databaseName="tasks.db" onInit={initDB}>
                <Stack screenOptions={{ headerShown: false }} />
            </SQLiteProvider>
        </SafeAreaProvider>
    );
}
