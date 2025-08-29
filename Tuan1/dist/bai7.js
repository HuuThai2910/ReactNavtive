"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name) {
        this.name = name;
    }
    get $name() {
        return this.name;
    }
    set $name(value) {
        this.name = value;
    }
}
exports.User = User;
