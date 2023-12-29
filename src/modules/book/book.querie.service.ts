import { BookSave, IBookRepository } from "./repositories/IBookRepository";

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

  async findByName(name: string): Promise<BookSave | null> {
    const book = await this.bookRepository.findByName(name);

    return book;
  }
}
