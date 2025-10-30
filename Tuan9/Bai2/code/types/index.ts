export interface Shop {
    id: string;
    name: string;
    address: string;
    image: string;
    status: "accepting" | "tempory_unavailable";
    deliveryTime: string;
}

export interface Drink {
    id: string;
    name: string;
    price: number;
    image: string;
}

export interface Order {
    id?: number;
    orderId: string;
    type: "CAFE DELIVERY" | "CAFE";
    items: OrderItem[];
    total: number;
    createdAt: string;
}

export interface OrderItem {
    drinkId: string;
    drinkName: string;
    drinkImage: string;
    price: number;
    quantity: number;
}
