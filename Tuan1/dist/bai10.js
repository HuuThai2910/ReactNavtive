"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.createdAt = new Date();
    }
}
exports.Account = Account;
