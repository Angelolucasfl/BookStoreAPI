import { Request, Response } from "express";
import { BookCreateService } from "./book.create.service";
import { BookQuerieService } from "./book.querie.service";
import { BookPrismaRepository } from "./repositories/BookPrismaRepository";

export class BookController {
  async create(request: Request, response: Response) {
    try {
      const { body } = request;
      const prismaRepository = new BookPrismaRepository();
      const createBookService = new BookCreateService(prismaRepository);

      const result = await createBookService.execute(body);
      return response.json(result);
    } catch (err: any) {
      return response.status(400).json({
        error: err.message,
      });
    }
  }

  async getAllBooks(request: Request, response: Response) {
    try {
      const prismaRepository = new BookPrismaRepository();
      const querieBookService = new BookQuerieService(prismaRepository);
      const result = await querieBookService.getAllBooks();

      return response.status(200).json(result);
    } catch (err: any) {
      return response.status(400).json({
        error: err.message,
      });
    }
  }

  async getAvailableBooks(request: Request, response: Response) {
    try {
      const prismaRepository = new BookPrismaRepository();
      const querieBookService = new BookQuerieService(prismaRepository);
      const result = await querieBookService.getAvailableBooks();

      return response.status(200).json(result);
    } catch (err: any) {
      return response.status(400).json({
        error: err.message,
      });
    }
  }
}
