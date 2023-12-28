import { Genre } from "@prisma/client";
import { BookCreateService } from "../book.create.service";
import { BookInMemoryRepository } from "../repositories/BookInMemoryRepository";
import { Decimal } from "@prisma/client/runtime/library";

let createBookService: BookCreateService;
let bookInMemoryRepository: BookInMemoryRepository;

describe("Create Book", () => {
  beforeAll(() => {
    bookInMemoryRepository = new BookInMemoryRepository();
    createBookService = new BookCreateService(bookInMemoryRepository);
  });

  it("Should be possible to create a new book", async () => {
    const newBook = {
      name: "book test",
      author: "author test",
      year_of_publication: 1000,
      genre: Genre.FANTASY,
      isAvailable: true,
      price: new Decimal(10.0),
    };
    const result = await createBookService.execute(newBook);

    expect(result.newBook).toHaveProperty("id");
  });

  it("Should not be able to create a already existing book", async () => {
    const newBook = {
      name: "same book test",
      author: "author test",
      year_of_publication: 1000,
      genre: Genre.FANTASY,
      isAvailable: true,
      price: new Decimal(10.0),
    };

    const fResult = await createBookService.execute(newBook);
    console.log({ fResult });
    await expect(createBookService.execute(newBook)).rejects.toEqual(
      new Error("Esse livro já existe!")
    );
  });
});
