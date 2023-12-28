import { BookSave, CreateBookProps, IBookRepository } from "./IBookRepository";
import { randomUUID } from "crypto";

export class BookInMemoryRepository implements IBookRepository {
  books: any[] = [];

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
    throw new Error("Method not implemented.");
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
