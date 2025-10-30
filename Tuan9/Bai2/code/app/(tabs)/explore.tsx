import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function TabTwoScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Menu</Text>

            <TouchableOpacity
                style={styles.menuButton}
                onPress={() => router.push("/shops")}
            >
                <Text style={styles.menuIcon}>🏪</Text>
                <Text style={styles.menuText}>Shops Near Me</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.menuButton}
                onPress={() => router.push("/drinks")}
            >
                <Text style={styles.menuIcon}>☕</Text>
                <Text style={styles.menuText}>Drinks</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.menuButton}
                onPress={() => router.push("/orders")}
            >
                <Text style={styles.menuIcon}>🛒</Text>
                <Text style={styles.menuText}>Your Orders</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 30,
        textAlign: "center",
    },
    menuButton: {
        backgroundColor: "#f5f5f5",
        padding: 20,
        borderRadius: 12,
        marginBottom: 16,
        flexDirection: "row",
        alignItems: "center",
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    menuIcon: {
        fontSize: 32,
        marginRight: 16,
    },
    menuText: {
        fontSize: 18,
        fontWeight: "600",
        color: "#333",
    },
});
