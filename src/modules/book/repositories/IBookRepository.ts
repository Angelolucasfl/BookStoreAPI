import { Genre } from "@prisma/client";

export type CreateBookProps = {
  name: string;
  author: string;
  year_of_publication: number;
  genre: Genre;
  isAvailable: boolean;
  price: number;
};

export type BookSave = CreateBookProps & {
  id: string;
};

export interface IBookRepository {
  save(data: CreateBookProps): Promise<BookSave>;
  checkAvailability(name: string): Promise<BookSave | false>;
  findByName(name: string): Promise<BookSave | null>;
}
