import { Router } from "express";
import { BookController } from "./book.controller";

const bookRouter = Router();
const bookController = new BookController();

bookRouter.post("/book", bookController.create);
bookRouter.get("/", bookController.getAllBooks);
bookRouter.get("/available-books", bookController.getAvailableBooks);
bookRouter.get("/book", bookController.getBookByName);
bookRouter.put("/book/:id", bookController.update);
bookRouter.delete("/book/:id", bookController.delete);

export { bookRouter };
