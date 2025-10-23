import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Image,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";

interface Task {
    id: string;
    text: string;
    done: boolean;
}

const API_URL = "https://6830916a6205ab0d6c399ca4.mockapi.io/products";

export default function HomeScreen() {
    const { name } = useLocalSearchParams<{ name?: string }>();
    const router = useRouter();
    const [tasks, setTasks] = useState<Task[]>([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get<Task[]>(API_URL).then((res) => setTasks(res.data));
    }, []);

    const handleToggle = async (id: string, done: boolean) => {
        await axios.put(`${API_URL}/${id}`, { done: !done });
        setTasks((prev) =>
            prev.map((t) => (t.id === id ? { ...t, done: !done } : t))
        );
    };

    return (
        <View style={styles.container}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <TouchableOpacity onPress={() => router.push("/")}>
                    <Text style={styles.back}>←</Text>
                </TouchableOpacity>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 10,
                    }}
                >
                    <Image
                        source={{ uri: "https://i.pravatar.cc/150?img=1" }}
                        style={{ width: 60, height: 60, borderRadius: 30 }}
                    />

                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
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
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.taskItem}>
                        <TouchableOpacity
                            onPress={() => handleToggle(item.id, item.done)}
                            style={{
                                flexDirection: "row",
                                alignItems: "center",

                                gap: 10,
                            }}
                        >
                            <Ionicons
                                name={
                                    item.done
                                        ? "checkbox-outline"
                                        : "close-circle-outline"
                                }
                                size={20}
                                color={item.done ? "green" : "red"}
                            />
                            <Text style={styles.taskText}>{item.text}</Text>
                            <Ionicons size={20} name="create" color={"red"} />
                        </TouchableOpacity>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff", padding: 16 },
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
        borderRadius: 50,
        padding: 10,
        shadowColor: "#000", // Màu bóng
        shadowOffset: { width: 0, height: 3 }, // Hướng bóng
        shadowOpacity: 0.5, // Độ mờ của bóng
        shadowRadius: 5, // Độ lan của bóng
        elevation: 3,
    },
    taskText: { fontSize: 16, flex: 1 },
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
    },
    plus: { fontSize: 30, color: "#fff" },
});
