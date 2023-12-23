import { BookSave, CreateBookProps, IBookRepository } from "./IBookRepository";
import { prismaClient } from "../../../database/client";

export class BookPrismaRepository implements IBookRepository {
  async save(data: CreateBookProps): Promise<BookSave> {
    const newBook = await prismaClient.book.create({
      data,
    });

    return newBook;
  }

  async findByName(name: string): Promise<BookSave | null> {
    const book = await prismaClient.book.findFirst({
      where: {
        name,
      },
    });

    return book;
  }

  async checkAvailability(name: string): Promise<BookSave | false> {
    const book = await prismaClient.book.findFirst({
      where: {
        name,
      },
    });

    if (book && book.isAvailable) {
      return book;
    }

    return false;
  }
}
