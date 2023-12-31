import { BookInMemoryRepository } from "../repositories/BookInMemoryRepository";
import { BookUpdateService } from "../bookUpdateService";
import { Decimal } from "@prisma/client/runtime/library";
import { Genre } from "@prisma/client";

let updateBookService: BookUpdateService;
let bookInMemoryRepository: BookInMemoryRepository;

describe("update book", () => {
  beforeAll(() => {
    bookInMemoryRepository = new BookInMemoryRepository();
    updateBookService = new BookUpdateService(bookInMemoryRepository);
  });

  it("Should be possible to create a new book", async () => {
    const updatedBook = {
      name: "book updated",
      author: "author updated",
      year_of_publication: 2000,
      genre: Genre.POETRY,
      isAvailable: false,
      price: new Decimal(20.0),
    };

    const result = await updateBookService.execute("idTest", updatedBook);
    expect(result.message).toBe("Livro atualizado com sucesso!");
  });
});
