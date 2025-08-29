export class BankAccount {
    blance: number;
    constructor(blance: number){
        this.blance = blance;
    }
    deposit(blance: number): number {
        return this.blance + blance;
    }
    withdraw(blance: number): number {
        return this.blance - blance;
    }
}