export class Account {
    public username: string;
    private password: string;
    readonly createdAt: Date;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
        this.createdAt = new Date();
    }
}
