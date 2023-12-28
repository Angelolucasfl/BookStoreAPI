import { IBookRepository } from "./repositories/IBookRepository";

export class BookQuerieService {
  constructor(private bookRepository: IBookRepository) {}

  async getAllBooks() {
    const books = await this.bookRepository.getAllBooks();

    return books;
  }

  async getAvailableBooks() {
    const books = await this.bookRepository.getAllAvailableBooks();

    return books;
  }
}
