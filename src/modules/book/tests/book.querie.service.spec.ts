import { BookInMemoryRepository } from "../repositories/BookInMemoryRepository";
import { BookQuerieService } from "../book.querie.service";

let querieBookService: BookQuerieService;
let bookInMemoryRepository: BookInMemoryRepository;

describe("querie books", () => {
  beforeAll(() => {
    bookInMemoryRepository = new BookInMemoryRepository();
    querieBookService = new BookQuerieService(bookInMemoryRepository);
  });

  it("should be able to fetch all books", async () => {
    const result = await querieBookService.getAllBooks();

    expect(Array.isArray(result)).toBe(true);
    expect(result.every((item) => typeof item === "string")).toBe(true);
  });

  it("should be able to fetch all available books", async () => {
    const result = await querieBookService.getAvailableBooks();

    expect(Array.isArray(result)).toBe(true);
    result.forEach((item) => {
      expect(item).toHaveProperty("isAvailable", true);
    });
  });
});
