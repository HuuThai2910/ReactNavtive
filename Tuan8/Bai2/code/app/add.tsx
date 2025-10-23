import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import axios from "axios";

const API_URL = "https://6830916a6205ab0d6c399ca4.mockapi.io/products";

export default function AddScreen() {
    const [job, setJob] = useState("");
    const { name } = useLocalSearchParams<{ name?: string }>();
    const router = useRouter();

    const handleAdd = async () => {
        if (!job.trim()) return;
        await axios.post(API_URL, { text: job, done: false });
        router.push("/home");
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
                <TouchableOpacity onPress={() => router.back()}>
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
            <View style={{ alignItems: "center" }}>
                <Text style={styles.title}>ADD YOUR JOB</Text>

                <TextInput
                    placeholder="input your job"
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
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    back: { color: "#26c6da", fontSize: 40 },
    greeting: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
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
        paddingHorizontal: 40,
        borderRadius: 8,
        width: "50%",
    },
    buttonText: { color: "#fff", fontWeight: "bold", textAlign: "center" },
    image: { width: 300, height: 300, marginTop: 40 },
});
