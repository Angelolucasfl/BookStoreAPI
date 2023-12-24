import { Router } from "express";
import { BookController } from "./book.controller";

const bookRouter = Router();
const bookController = new BookController();

bookRouter.post("/", bookController.create);

export { bookRouter };
