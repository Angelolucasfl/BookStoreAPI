import { BookSave, CreateBookProps, IBookRepository } from "./IBookRepository";
import { prismaClient } from "../../../database/client";

export class BookPrismaRepository implements IBookRepository {
  async updateBook(id: string, data: CreateBookProps): Promise<BookSave> {
    const updatedBook = await prismaClient.book.update({
      where: { id: id },
      data, 
    });
    return updatedBook;
  }

  async getAllAvailableBooks(): Promise<BookSave[]> {
    const books = await prismaClient.book.findMany({
      where: {
        isAvailable: true,
      },
    });

    return books;
  }

  async getAllBooks(): Promise<string[]> {
    const books = await prismaClient.book.findMany();
    const names = books.map((book) => book.name);

    return names;
  }

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
