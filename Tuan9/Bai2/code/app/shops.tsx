import { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    Image,
} from "react-native";
import { useRouter } from "expo-router";
import { ApiService } from "@/services/api";
import { Shop } from "@/types";

export default function ShopsScreen() {
    const router = useRouter();
    const [shops, setShops] = useState<Shop[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadShops();
    }, []);

    const loadShops = async () => {
        try {
            const data = await ApiService.getShops();
            setShops(data);
        } catch (error) {
            console.error("Error loading shops:", error);
        } finally {
            setLoading(false);
        }
    };

    const renderShop = ({ item }: { item: Shop }) => {
        const isAccepting = item.status === "accepting";

        return (
            <TouchableOpacity
                style={styles.shopCard}
                onPress={() => router.push("/drinks")}
            >
                <Image source={{ uri: item.image }} style={styles.shopImage} />

                <View style={styles.statusContainer}>
                    <View
                        style={[
                            styles.statusBadge,
                            isAccepting ? styles.accepting : styles.unavailable,
                        ]}
                    >
                        <Text style={styles.statusIcon}>
                            {isAccepting ? "✓" : "🔒"}
                        </Text>
                        <Text style={styles.statusText}>
                            {isAccepting
                                ? "Accepting Orders"
                                : "Tempory Unavailable"}
                        </Text>
                    </View>

                    <View style={styles.timeContainer}>
                        <Text style={styles.timeIcon}>⏱</Text>
                        <Text style={styles.timeText}>{item.deliveryTime}</Text>
                    </View>

                    <Text style={styles.locationIcon}>📍</Text>
                </View>

                <View style={styles.shopInfo}>
                    <Text style={styles.shopName}>{item.name}</Text>
                    <Text style={styles.shopAddress}>{item.address}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#00BDD6" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.backButton}>←</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Shops Near Me</Text>
                <TouchableOpacity>
                    <Text style={styles.searchIcon}>🔍</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={shops}
                renderItem={renderShop}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
    },
    backButton: {
        fontSize: 24,
        color: "#333",
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: "#333",
    },
    searchIcon: {
        fontSize: 20,
    },
    listContainer: {
        padding: 16,
    },
    shopCard: {
        backgroundColor: "#fff",
        borderRadius: 12,
        marginBottom: 16,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    shopImage: {
        width: "100%",
        height: 150,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    statusContainer: {
        position: "absolute",
        top: 12,
        left: 12,
        right: 12,
        flexDirection: "row",
        alignItems: "center",
    },
    statusBadge: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        flex: 1,
    },
    accepting: {
        backgroundColor: "rgba(76, 175, 80, 0.9)",
    },
    unavailable: {
        backgroundColor: "rgba(244, 67, 54, 0.9)",
    },
    statusIcon: {
        color: "#fff",
        marginRight: 4,
    },
    statusText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "600",
    },
    timeContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(255, 152, 0, 0.9)",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        marginLeft: 8,
    },
    timeIcon: {
        marginRight: 4,
    },
    timeText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "600",
    },
    locationIcon: {
        fontSize: 20,
        marginLeft: 8,
    },
    shopInfo: {
        padding: 12,
    },
    shopName: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
        marginBottom: 4,
    },
    shopAddress: {
        fontSize: 14,
        color: "#666",
    },
});
