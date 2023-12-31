import {
  CreateBookProps,
  IBookRepository,
} from "./repositories/IBookRepository";

export class BookUpdateService {
  constructor(private bookRepository: IBookRepository) {}

  async execute(id: string, data: CreateBookProps) {
    const bookExists = await this.bookRepository.findById(id);

    if (!bookExists) {
      throw new Error("Esse livro não foi encontrado");
    }

    const updatedBook = await this.bookRepository.updateBook(id, data);
    return {
      message: "Livro atualizado com sucesso!",
      updatedBook,
    };
  }
}
