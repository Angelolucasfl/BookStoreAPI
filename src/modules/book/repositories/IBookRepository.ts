import { Genre } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export type CreateBookProps = {
  name: string;
  author: string;
  year_of_publication: number;
  genre: Genre;
  isAvailable: boolean;
  price: Decimal;
};

export type BookSave = CreateBookProps & {
  id: string;
};

export interface IBookRepository {
  save(data: CreateBookProps): Promise<BookSave>;

  checkAvailability(name: string): Promise<BookSave | false>;
  findByName(name: string): Promise<BookSave | null>;
  getAllBooks(): Promise<string[]>;
  getAllAvailableBooks(): Promise<BookSave[]>;
  findById(id: string): Promise<BookSave | null>;

  updateBook(id: string, data: CreateBookProps): Promise<BookSave | null>;
  deleteBook(id: string): Promise<BookSave | null>;
}
