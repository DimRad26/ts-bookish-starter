import { Router, Request, Response } from 'express';
import { connection } from '../DB_Connection';

class BookController {
    router: Router;

    constructor() {
        this.router = Router();
        this.router.get('/:id', this.getBook.bind(this));
        this.router.get('/', this.getBooks.bind(this));

        this.router.post('/', this.createBook.bind(this));
    }

    getBook(req: Request, res: Response) {
        // TODO: implement functionality
        return res.status(500).json({
            error: 'server_error',
            error_description: 'GetBook Endpoint not implemented yet.',
        });
    }

    getBooks(req: Request, res: Response) {
        try{
            var Request = require('tedious').Request;
            const QUERY = 'SELECT * FROM Books;';
            var books: any[] = []

            const request = new Request(QUERY, (err, rowCount) => {
                if (err) {
                    console.log(err);
                } else {
                    return res.status(200).json(books);
                    connection.close();
                }
            });


            request.on('row', (columns) => {
                let row = {};
                columns.forEach((column) => {
                    row[column.metadata.colName] = column.value;
                });
                const book: Book = {
                    book_id: row["book_id"],
                    ISBN: row["ISBN"],
                    title: row["title"],
                    copies_count: row["copies_count"],
                };
                books.push(book);
            });

            request.on('error', (err) => {
                return res.status(500).json({error: err.message});
            });

            connection.execSql(request);
        }
        catch(err){
            return res.status(500).json({error: err.message});
        }
    }

    createBook(req: Request, res: Response) {
        // TODO: implement functionality
        return res.status(500).json({
            error: 'server_error',
            error_description: 'CreateBook Endpoint not implemented yet.',
        });
    }
}

export default new BookController().router;
