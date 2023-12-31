import { Decimal } from "@prisma/client/runtime/library";
import { Genre } from "@prisma/client";
import { BookSave, CreateBookProps, IBookRepository } from "./IBookRepository";
import { randomUUID } from "crypto";

export class BookInMemoryRepository implements IBookRepository {
  books: any[] = [
    {
      id: "idTest",
      name: "book",
      author: "author",
      year_of_publication: 1000,
      genre: Genre.FANTASY,
      isAvailable: true,
      price: new Decimal(12.0),
    },
  ];

  async deleteBook(id: string): Promise<BookSave | null> {
    const deletedBookIndex = this.books.findIndex((book) => book.id === id);
    const deletedBook = this.books.splice(deletedBookIndex, 1)[0];
    
    return deletedBook;
  }

  async findById(id: string): Promise<BookSave | null> {
    const book = this.books.find((book) => book.id === id);
    return Promise.resolve(book || null);
  }

  async updateBook(
    id: string,
    data: CreateBookProps
  ): Promise<BookSave | null> {
    const updatedBookIndex = this.books.findIndex((book) => book.id === id);

    const updatedBook = (this.books[updatedBookIndex] = {
      ...this.books[updatedBookIndex],
      ...data,
    });

    return updatedBook;
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
    console.log(this.books.find((book) => book.name));
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
