import { BookInMemoryRepository } from "../repositories/BookInMemoryRepository";
import { BookUpdateService } from "../bookUpdateService";
import { Decimal } from "@prisma/client/runtime/library";
import { Genre } from "@prisma/client";

let updateBookService: BookUpdateService;
let bookInMemoryRepository: BookInMemoryRepository;

describe("update book", () => {});
