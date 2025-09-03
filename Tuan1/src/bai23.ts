interface Payment {
    pay(amount: number): void;
}

export class CashPayment implements Payment {
    pay(amount: number): void {
        console.log(`Paid ${amount} via cash`);
    }
}

export class CardPayment implements Payment {
    pay(amount: number): void {
        console.log(`Paid ${amount} via card`);
    }
}
