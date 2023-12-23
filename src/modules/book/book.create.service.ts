import { CreateBookProps } from "./repositories/IBookRepository";
import { IBookRepository } from "./repositories/IBookRepository";

export class BookCreateService {
  constructor(private bookRepository: IBookRepository) {}

  async execute(data: CreateBookProps) {
    const bookExists = await this.bookRepository.findByName(data.name);
  
    if (bookExists) {
      throw new Error("Esse livro já existe!");
    }
  
    const newBook = await this.bookRepository.save(data);
    
    return {
      message: "Livro cadastrado com sucesso!",
      newBook
    };
  }
}
