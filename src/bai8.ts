export class Product {
    name: string;
    price: number;

	constructor($name: string, $price: number) {
		this.name = $name;
		this.price = $price;
	}
    
    displayInfo(): void {
        console.log(this);
    }

}