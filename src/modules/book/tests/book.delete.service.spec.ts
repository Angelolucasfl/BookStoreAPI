import { BookInMemoryRepository } from "../repositories/BookInMemoryRepository";
import { BookDeleteService } from "../book.delete.service";

let deleteBookService: BookDeleteService;
let bookInMemoryRepository: BookInMemoryRepository;

describe("book delete", () => {
  beforeAll(() => {
    bookInMemoryRepository = new BookInMemoryRepository();
    deleteBookService = new BookDeleteService(bookInMemoryRepository);
  });

  it("should be able to delete a book", async () => {
    const deletedBook  = await deleteBookService.execute("idTest");
    expect(deletedBook).not.toBeNull();
    expect(deletedBook.message).toBe("Livro deletado com sucesso!");
  });
});
