import { Book } from "./bai6";
import { User } from "./bai7";

export class Library {
    books: Book[] = [];
    users: User[] = [];

    addBook(book: Book): void {
        this.books.push(book);
        console.log("Added book successfully ");
    }
}
