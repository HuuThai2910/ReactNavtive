import { Image } from "expo-image";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { DatabaseService } from "@/services/database";

export default function WelcomeScreen() {
    const router = useRouter();

    useEffect(() => {
        // Initialize database when app starts
        DatabaseService.init().catch((error) => {
            console.error("Failed to initialize database:", error);
        });
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Welcome to Cafe world</Text>

                <View style={styles.imageContainer}>
                    <Image
                        source={require("@/assets/images/react-logo.png")}
                        style={styles.logo}
                        contentFit="contain"
                    />
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => router.push("/(tabs)/explore")}
                >
                    <Text style={styles.buttonText}>GET STARTED</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 40,
        textAlign: "center",
    },
    imageContainer: {
        width: 200,
        height: 200,
        marginBottom: 60,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: "100%",
        height: "100%",
    },
    button: {
        backgroundColor: "#00BDD6",
        paddingHorizontal: 60,
        paddingVertical: 15,
        borderRadius: 8,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});
