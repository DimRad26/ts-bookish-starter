export class Book {
    book_id: number;
    ISBN: number;
    title: string;
    copies_count: number;

    constructor(row: any) {
        this.book_id = ("book_id" in row) ? row["book_id"] : null;
        this.ISBN = ("ISBN" in row) ? row["ISBN"] : null;
        this.title = ("title" in row) ? row["title"] : null;
        this.copies_count = ("copies_count" in row) ? row["copies_count"] : null;
    }
}