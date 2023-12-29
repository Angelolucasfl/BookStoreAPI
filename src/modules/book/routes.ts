import { Router } from "express";
import { BookController } from "./book.controller";

const bookRouter = Router();
const bookController = new BookController();

bookRouter.post("/", bookController.create);
bookRouter.get("/", bookController.getAllBooks);
bookRouter.get("/available-books", bookController.getAvailableBooks);
bookRouter.get("/:name", bookController.getBookByName);

export { bookRouter };
