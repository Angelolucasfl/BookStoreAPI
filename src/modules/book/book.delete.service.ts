import { IBookRepository } from "./repositories/IBookRepository";

export class BookDeleteService {
  constructor(private bookRepository: IBookRepository) {}

  async execute(id: string) {
    const bookExists = await this.bookRepository.findById(id);

    if (!bookExists) {
      throw new Error("Esse livro não foi encontrado");
    }

    const deletedBook = await this.bookRepository.deleteBook(id);
    return {
        deletedBook,
        message: "Livro deletado com sucesso!"
    } 
  }
}
