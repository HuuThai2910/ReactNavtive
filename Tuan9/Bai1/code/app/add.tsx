import { useLocalSearchParams, useRouter } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";
import React, { useState } from "react";
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { addTask } from "../database";

export default function AddScreen() {
    const db = useSQLiteContext();
    const [job, setJob] = useState("");
    const { name } = useLocalSearchParams<{ name?: string }>();
    const router = useRouter();

    const handleAdd = async () => {
        if (!job.trim()) return;
        await addTask(db, job);
        router.push("/home");
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => router.back()}>
                <Text style={styles.back}>←</Text>
            </TouchableOpacity>

            <View style={styles.header}>
                <Image
                    source={{ uri: "https://i.pravatar.cc/150?img=1" }}
                    style={styles.avatar}
                />
                <View>
                    <Text style={styles.greeting}>Hi {name || "Twinkle"}</Text>
                    <Text>Have a great day ahead</Text>
                </View>
            </View>

            <Text style={styles.title}>ADD YOUR JOB</Text>

            <TextInput
                placeholder="Input your job"
                value={job}
                onChangeText={setJob}
                style={styles.input}
            />

            <TouchableOpacity style={styles.button} onPress={handleAdd}>
                <Text style={styles.buttonText}>FINISH →</Text>
            </TouchableOpacity>

            <Image
                source={require("../assets/images/Image95.png")}
                style={styles.image}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff", padding: 20 },
    back: { color: "#26c6da", fontSize: 40 },
    greeting: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
    header: { flexDirection: "row", alignItems: "center", gap: 10 },
    avatar: { width: 60, height: 60, borderRadius: 30 },
    title: { fontSize: 18, fontWeight: "bold", marginVertical: 20 },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        width: "90%",
        marginBottom: 30,
    },
    button: {
        backgroundColor: "#26c6da",
        paddingVertical: 12,
        borderRadius: 8,
        width: "50%",
        alignSelf: "center",
    },
    buttonText: { color: "#fff", fontWeight: "bold", textAlign: "center" },
    image: { width: 300, height: 300, marginTop: 40, alignSelf: "center" },
});
