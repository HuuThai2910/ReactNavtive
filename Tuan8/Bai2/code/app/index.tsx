import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
} from "react-native";
import { useRouter } from "expo-router";

export default function IndexScreen() {
    const [name, setName] = useState("");
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/images/Image95.png")}
                style={{ marginVertical: 20 }}
            />
            <Text style={styles.title}>MANAGE YOUR {"\n"} TASK</Text>

            <TextInput
                placeholder="Enter your name"
                value={name}
                onChangeText={setName}
                style={styles.input}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    router.push({ pathname: "/home", params: { name } })
                }
            >
                <Text style={styles.buttonText}>GET STARTED →</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: "center",
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#6c47ff",
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        width: "80%",
        marginVertical: 30,
    },
    button: {
        marginTop: 30,
        backgroundColor: "#26c6da",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    buttonText: { color: "#fff", fontWeight: "bold" },
});
