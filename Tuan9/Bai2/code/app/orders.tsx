import { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    Image,
    Alert,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { DatabaseService } from "@/services/database";
import { Order, OrderItem } from "@/types";

export default function OrdersScreen() {
    const router = useRouter();
    const params = useLocalSearchParams();
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadOrders();
    }, []);

    useEffect(() => {
        // Add new order from cart if provided
        if (params.cartData) {
            try {
                const cartItems = JSON.parse(
                    params.cartData as string
                ) as OrderItem[];
                addNewOrder(cartItems);
            } catch (error) {
                console.error("Error parsing cart data:", error);
            }
        }
    }, [params.cartData]);

    const loadOrders = async () => {
        try {
            const data = await DatabaseService.getAllOrders();
            setOrders(data);
        } catch (error) {
            console.error("Error loading orders:", error);
        } finally {
            setLoading(false);
        }
    };

    const addNewOrder = async (items: OrderItem[]) => {
        try {
            const total = items.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            );
            const orderNumber = Math.floor(1000 + Math.random() * 9000);

            const newOrder: Order = {
                orderId: `#${orderNumber}`,
                type: Math.random() > 0.5 ? "CAFE DELIVERY" : "CAFE",
                items: items,
                total: total,
                createdAt: new Date().toISOString(),
            };

            await DatabaseService.addOrder(newOrder);
            await loadOrders();

            Alert.alert("Success", "Order added successfully!");
        } catch (error) {
            console.error("Error adding order:", error);
            Alert.alert("Error", "Failed to add order");
        }
    };

    const handlePayment = (order: Order) => {
        Alert.alert(
            "Payment",
            `Pay $${order.total.toFixed(2)} for order ${order.orderId}?`,
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Pay Now",
                    onPress: () => {
                        Alert.alert("Success", "Payment completed!");
                    },
                },
            ]
        );
    };

    const renderOrderItem = ({ item }: { item: OrderItem }) => (
        <View style={styles.orderItemRow}>
            <Image source={{ uri: item.drinkImage }} style={styles.itemImage} />
            <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.drinkName}</Text>
                <Text style={styles.itemPrice}>${item.price}</Text>
            </View>
            <View style={styles.quantityBadge}>
                <Text style={styles.quantityText}>x{item.quantity}</Text>
            </View>
        </View>
    );

    const renderOrder = ({ item }: { item: Order }) => {
        const orderTypeColor =
            item.type === "CAFE DELIVERY" ? "#00BDD6" : "#9C27B0";

        return (
            <View style={styles.orderCard}>
                <View
                    style={[
                        styles.orderHeader,
                        { backgroundColor: orderTypeColor },
                    ]}
                >
                    <Text style={styles.orderType}>{item.type}</Text>
                    <Text style={styles.orderId}>Order {item.orderId}</Text>
                </View>

                <View style={styles.orderBody}>
                    {item.items.map((orderItem, index) => (
                        <View key={index} style={styles.orderItemRow}>
                            <Image
                                source={{ uri: orderItem.drinkImage }}
                                style={styles.itemImage}
                            />
                            <View style={styles.itemInfo}>
                                <Text style={styles.itemName}>
                                    {orderItem.drinkName}
                                </Text>
                                <Text style={styles.itemPrice}>
                                    ${orderItem.price}
                                </Text>
                            </View>
                            <View style={styles.quantityBadge}>
                                <View style={styles.quantityButtons}>
                                    <TouchableOpacity
                                        style={styles.quantityBtn}
                                    >
                                        <Text style={styles.quantityBtnText}>
                                            -
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.quantityBtn}
                                    >
                                        <Text style={styles.quantityBtnText}>
                                            +
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>

                <TouchableOpacity
                    style={styles.payButton}
                    onPress={() => handlePayment(item)}
                >
                    <Text style={styles.payButtonText}>PAY NOW</Text>
                </TouchableOpacity>
            </View>
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
                <Text style={styles.headerTitle}>Your orders</Text>
                <TouchableOpacity>
                    <Text style={styles.searchIcon}>🔍</Text>
                </TouchableOpacity>
            </View>

            {orders.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>No orders yet</Text>
                </View>
            ) : (
                <FlatList
                    data={orders}
                    renderItem={renderOrder}
                    keyExtractor={(item) =>
                        item.id?.toString() || Math.random().toString()
                    }
                    contentContainerStyle={styles.listContainer}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
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
        backgroundColor: "#fff",
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
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    emptyText: {
        fontSize: 16,
        color: "#999",
    },
    listContainer: {
        padding: 16,
    },
    orderCard: {
        backgroundColor: "#fff",
        borderRadius: 12,
        marginBottom: 16,
        overflow: "hidden",
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    orderHeader: {
        padding: 12,
    },
    orderType: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 4,
    },
    orderId: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    orderBody: {
        padding: 12,
    },
    orderItemRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
    },
    itemImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
    },
    itemInfo: {
        flex: 1,
        marginLeft: 12,
    },
    itemName: {
        fontSize: 14,
        fontWeight: "600",
        color: "#333",
        marginBottom: 4,
    },
    itemPrice: {
        fontSize: 12,
        color: "#666",
    },
    quantityBadge: {
        marginLeft: 12,
    },
    quantityButtons: {
        flexDirection: "row",
        gap: 4,
    },
    quantityBtn: {
        width: 28,
        height: 28,
        backgroundColor: "#4CAF50",
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
    },
    quantityBtnText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    quantityText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#333",
    },
    payButton: {
        backgroundColor: "#FFC107",
        padding: 16,
        margin: 12,
        borderRadius: 8,
        alignItems: "center",
    },
    payButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});
