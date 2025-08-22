"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(blance) {
        this.blance = blance;
    }
    deposit(blance) {
        return this.blance + blance;
    }
    withdraw(blance) {
        return this.blance - blance;
    }
}
exports.BankAccount = BankAccount;
