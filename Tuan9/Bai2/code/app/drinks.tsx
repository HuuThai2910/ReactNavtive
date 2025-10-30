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
import { useRouter } from "expo-router";
import { ApiService } from "@/services/api";
import { Drink, OrderItem } from "@/types";

export default function DrinksScreen() {
    const router = useRouter();
    const [drinks, setDrinks] = useState<Drink[]>([]);
    const [cart, setCart] = useState<Map<string, OrderItem>>(new Map());
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadDrinks();
    }, []);

    const loadDrinks = async () => {
        try {
            const data = await ApiService.getDrinks();
            setDrinks(data);
        } catch (error) {
            console.error("Error loading drinks:", error);
        } finally {
            setLoading(false);
        }
    };

    const addToCart = (drink: Drink) => {
        const newCart = new Map(cart);
        const existing = newCart.get(drink.id);

        if (existing) {
            newCart.set(drink.id, {
                ...existing,
                quantity: existing.quantity + 1,
            });
        } else {
            newCart.set(drink.id, {
                drinkId: drink.id,
                drinkName: drink.name,
                drinkImage: drink.image,
                price: drink.price,
                quantity: 1,
            });
        }

        setCart(newCart);
    };

    const removeFromCart = (drinkId: string) => {
        const newCart = new Map(cart);
        const existing = newCart.get(drinkId);

        if (existing && existing.quantity > 1) {
            newCart.set(drinkId, {
                ...existing,
                quantity: existing.quantity - 1,
            });
        } else {
            newCart.delete(drinkId);
        }

        setCart(newCart);
    };

    const getQuantity = (drinkId: string): number => {
        return cart.get(drinkId)?.quantity || 0;
    };

    const getTotal = (): number => {
        let total = 0;
        cart.forEach((item) => {
            total += item.price * item.quantity;
        });
        return total;
    };

    const goToCart = () => {
        if (cart.size === 0) {
            Alert.alert(
                "Cart Empty",
                "Please add some drinks to your cart first."
            );
            return;
        }

        // Pass cart data to orders screen
        router.push({
            pathname: "/orders",
            params: { cartData: JSON.stringify(Array.from(cart.values())) },
        });
    };

    const renderDrink = ({ item }: { item: Drink }) => {
        const quantity = getQuantity(item.id);

        return (
            <View style={styles.drinkCard}>
                <Image source={{ uri: item.image }} style={styles.drinkImage} />

                <View style={styles.drinkInfo}>
                    <Text style={styles.drinkName}>{item.name}</Text>
                    <Text style={styles.drinkPrice}>${item.price}</Text>
                </View>

                <View style={styles.quantityContainer}>
                    <TouchableOpacity
                        style={[styles.quantityButton, styles.removeButton]}
                        onPress={() => removeFromCart(item.id)}
                    >
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.quantityText}>{quantity}</Text>

                    <TouchableOpacity
                        style={[styles.quantityButton, styles.addButton]}
                        onPress={() => addToCart(item)}
                    >
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
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
                <Text style={styles.headerTitle}>Drinks</Text>
                <TouchableOpacity>
                    <Text style={styles.searchIcon}>🔍</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={drinks}
                renderItem={renderDrink}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={styles.listContainer}
            />

            <TouchableOpacity style={styles.cartButton} onPress={goToCart}>
                <Text style={styles.cartButtonText}>
                    GO TO CART - ${getTotal().toFixed(2)}
                </Text>
            </TouchableOpacity>
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
        padding: 8,
    },
    drinkCard: {
        flex: 1,
        margin: 8,
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 12,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        maxWidth: "45%",
    },
    drinkImage: {
        width: "100%",
        height: 100,
        borderRadius: 8,
        marginBottom: 8,
    },
    drinkInfo: {
        marginBottom: 8,
    },
    drinkName: {
        fontSize: 14,
        fontWeight: "600",
        color: "#333",
        marginBottom: 4,
    },
    drinkPrice: {
        fontSize: 12,
        color: "#666",
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    quantityButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    addButton: {
        backgroundColor: "#4CAF50",
    },
    removeButton: {
        backgroundColor: "#FF5252",
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    quantityText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
    },
    cartButton: {
        backgroundColor: "#FFC107",
        padding: 16,
        margin: 16,
        borderRadius: 8,
        alignItems: "center",
    },
    cartButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});
