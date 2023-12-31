import { Decimal } from "@prisma/client/runtime/library";
import { Genre } from "@prisma/client";
import { BookSave, CreateBookProps, IBookRepository } from "./IBookRepository";
import { randomUUID } from "crypto";

export class BookInMemoryRepository implements IBookRepository {
  books: any[] = [];

  async updateBook(
    id: string,
    data: CreateBookProps
  ): Promise<BookSave | null> {
    const updatedBookIndex = this.books.findIndex((book) => book.id === id);

    if (updatedBookIndex !== -1) {
      this.books[updatedBookIndex] = {
        ...this.books[updatedBookIndex],
        ...data,
      };
      return Promise.resolve(this.books[updatedBookIndex]);
    }

    return Promise.resolve(null);
  }

  async save(data: CreateBookProps): Promise<BookSave> {
    const id = randomUUID();
    const book: BookSave = {
      ...data,
      id,
    };

    this.books.push(book);
    return book;
  }

  async checkAvailability(name: string): Promise<false | BookSave> {
    const book = this.books.find((book) => book.name === name);
    if (book.isAvailable) {
      return book;
    } else {
      return false;
    }
  }

  async findByName(name: string): Promise<BookSave | null> {
    return this.books.find((book) => book.name === name);
  }

  async getAllBooks(): Promise<string[]> {
    const names = this.books.map((book) => book.name);
    return names;
  }

  async getAllAvailableBooks(): Promise<BookSave[]> {
    const books = this.books.filter((book) => book.isAvailable === true);
    return books;
  }
}
