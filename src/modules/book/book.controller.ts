import { Request, Response } from "express";
import { BookCreateService } from "./book.create.service";
import { BookQuerieService } from "./book.querie.service";
import { BookPrismaRepository } from "./repositories/BookPrismaRepository";
import { BookUpdateService } from "./bookUpdateService";
import { BookDeleteService } from "./book.delete.service";

export class BookController {
  async create(request: Request, response: Response) {
    try {
      const { body } = request;
      const prismaRepository = new BookPrismaRepository();
      const createBookService = new BookCreateService(prismaRepository);

      const result = await createBookService.execute(body);
      return response.status(201).json(result);
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

  async getBookByName(request: Request, response: Response) {
    try {
      const { name } = request.query;
      const prismaRepository = new BookPrismaRepository();
      const querieBookService = new BookQuerieService(prismaRepository);

      if (typeof name === "string") {
        const result = await querieBookService.findByName(name);
        return response.status(200).json(result);
      } else {
        throw new Error('Parâmetro "name" inválido');
      }
    } catch (err: any) {
      return response.status(400).json({
        error: err.message,
      });
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { body } = request;
      const prismaRepository = new BookPrismaRepository();
      const updateBookService = new BookUpdateService(prismaRepository);
      const result = await updateBookService.execute(id, body);

      return response.status(200).json(result);
    } catch (err: any) {
      return response.status(400).json({
        error: err.message,
      });
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const prismaRepository = new BookPrismaRepository();
      const deleteBookService = new BookDeleteService(prismaRepository);
      const result = await deleteBookService.execute(id);

      return response
        .status(200)
        .json({ message: "livro deletado com sucesso" });
    } catch (err: any) {
      return response.status(400).json({
        error: err.message,
      });
    }
  }
}
