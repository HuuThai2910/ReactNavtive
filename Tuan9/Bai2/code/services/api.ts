import axios from "axios";
import { Shop, Drink } from "../types";

const API_BASE_URL = "https://6901e4c7b208b24affe42417.mockapi.io";

export class ApiService {
    static async getShops(): Promise<Shop[]> {
        try {
            const response = await axios.get(`${API_BASE_URL}/shops`);
            return response.data;
        } catch (error) {
            console.error("Error fetching shops:", error);
            throw error;
        }
    }

    static async getDrinks(): Promise<Drink[]> {
        try {
            const response = await axios.get(`${API_BASE_URL}/drinks`);
            return response.data;
        } catch (error) {
            console.error("Error fetching drinks:", error);
            throw error;
        }
    }
}
