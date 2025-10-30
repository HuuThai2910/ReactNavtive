import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";
import {
    Alert,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { deleteTask, getTasks, toggleTask, updateTask } from "../database";
import { Task } from "../types";

export default function HomeScreen() {
    const db = useSQLiteContext();
    const { name } = useLocalSearchParams<{ name?: string }>();
    const router = useRouter();
    const [tasks, setTasks] = useState<Task[]>([]);
    const [search, setSearch] = useState("");
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editText, setEditText] = useState("");

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        const allTasks = await getTasks(db);
        setTasks(allTasks);
    };

    const handleToggle = async (id: number, done: number) => {
        await toggleTask(db, id, done === 0);
        await loadTasks();
    };

    const handleDelete = async (id: number, taskText: string) => {
        Alert.alert("Xóa Task", `Bạn có chắc muốn xóa task "${taskText}"?`, [
            {
                text: "Hủy",
                style: "cancel",
            },
            {
                text: "Xóa",
                style: "destructive",
                onPress: async () => {
                    await deleteTask(db, id);
                    await loadTasks();
                },
            },
        ]);
    };

    const handleEdit = (id: number, text: string) => {
        setEditingId(id);
        setEditText(text);
    };

    const handleSaveEdit = async () => {
        if (editingId && editText.trim()) {
            await updateTask(db, editingId, editText);
            setEditingId(null);
            setEditText("");
            await loadTasks();
        }
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setEditText("");
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push("/")}>
                    <Text style={styles.back}>←</Text>
                </TouchableOpacity>
                <View style={styles.userBox}>
                    <Image
                        source={{ uri: "https://i.pravatar.cc/150?img=1" }}
                        style={styles.avatar}
                    />
                    <View>
                        <Text style={styles.greeting}>
                            Hi {name || "Twinkle"}
                        </Text>
                        <Text>Have a great day ahead</Text>
                    </View>
                </View>
            </View>

            <TextInput
                placeholder="Search"
                value={search}
                onChangeText={setSearch}
                style={styles.search}
            />

            <FlatList
                data={tasks.filter((t) =>
                    t.text.toLowerCase().includes(search.toLowerCase())
                )}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.taskItem}>
                        {editingId === item.id ? (
                            // Chế độ chỉnh sửa
                            <View style={styles.editContainer}>
                                <TextInput
                                    style={styles.editInput}
                                    value={editText}
                                    onChangeText={setEditText}
                                    autoFocus
                                />
                                <View style={styles.editButtons}>
                                    <TouchableOpacity
                                        onPress={handleSaveEdit}
                                        style={[
                                            styles.editButton,
                                            styles.saveButton,
                                        ]}
                                    >
                                        <Ionicons
                                            name="checkmark"
                                            size={20}
                                            color="#fff"
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={handleCancelEdit}
                                        style={[
                                            styles.editButton,
                                            styles.cancelButton,
                                        ]}
                                    >
                                        <Ionicons
                                            name="close"
                                            size={20}
                                            color="#fff"
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ) : (
                            // Chế độ hiển thị bình thường
                            <View style={styles.taskRow}>
                                <TouchableOpacity
                                    onPress={() =>
                                        handleToggle(item.id, item.done)
                                    }
                                    style={styles.checkboxContainer}
                                >
                                    <Ionicons
                                        name={
                                            item.done
                                                ? "checkbox-outline"
                                                : "square-outline"
                                        }
                                        size={24}
                                        color={item.done ? "green" : "#666"}
                                    />
                                </TouchableOpacity>
                                <Text
                                    style={[
                                        styles.taskText,
                                        item.done === 1 && styles.taskTextDone,
                                    ]}
                                >
                                    {item.text}
                                </Text>
                                <TouchableOpacity
                                    onPress={() =>
                                        handleEdit(item.id, item.text)
                                    }
                                    style={styles.iconButton}
                                >
                                    <Ionicons
                                        size={22}
                                        name="create"
                                        color="#26c6da"
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() =>
                                        handleDelete(item.id, item.text)
                                    }
                                    style={styles.iconButton}
                                >
                                    <Ionicons
                                        size={22}
                                        name="trash"
                                        color="#ff6b6b"
                                    />
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                )}
            />

            <TouchableOpacity
                onPress={() =>
                    router.push({ pathname: "/add", params: { name } })
                }
                style={styles.addButton}
            >
                <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff", padding: 18 },
    back: { color: "#26c6da", fontSize: 40 },
    greeting: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
    search: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 8,
        marginVertical: 16,
    },
    taskItem: {
        marginVertical: 8,
        backgroundColor: "#f7f7f7",
        borderRadius: 12,
        padding: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    taskRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        paddingVertical: 4,
    },
    checkboxContainer: {
        padding: 4,
    },
    taskText: {
        fontSize: 16,
        flex: 1,
        color: "#333",
    },
    taskTextDone: {
        textDecorationLine: "line-through",
        color: "#999",
    },
    iconButton: {
        padding: 4,
    },
    editContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    editInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#26c6da",
        borderRadius: 8,
        padding: 8,
        fontSize: 16,
        backgroundColor: "#fff",
    },
    editButtons: {
        flexDirection: "row",
        gap: 8,
    },
    editButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",
    },
    saveButton: {
        backgroundColor: "#4caf50",
    },
    cancelButton: {
        backgroundColor: "#f44336",
    },
    addButton: {
        position: "absolute",
        bottom: 30,
        right: 30,
        backgroundColor: "#26c6da",
        borderRadius: 50,
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    plus: { fontSize: 30, color: "#fff" },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    userBox: { flexDirection: "row", alignItems: "center", gap: 10 },
    avatar: { width: 60, height: 60, borderRadius: 30 },
});
