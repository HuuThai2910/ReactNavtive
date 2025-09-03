import { Product } from "./bai8";

export class Order {
    private products: Product[] = [];

    constructor(products: Product[]) {
        this.products = products;
    }

    getTotalPrice(): number {
        return this.products.reduce(
            (total, product) => total + product.price,
            0
        );
    }
}
