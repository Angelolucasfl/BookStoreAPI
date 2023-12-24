import { Request, Response } from "express";
import { BookCreateService } from "./book.create.service";
import { BookPrismaRepository } from "./repositories/BookPrismaRepository";

export class BookController{

    async create(request: Request, response: Response){
        try{
            const { body } = request;
            const prismaRepository = new BookPrismaRepository();
            const createBookService = new BookCreateService(prismaRepository);
    
            const result = await createBookService.execute(body);
            return response.json(result);
        } catch(err: any){
            return response.status(400).json({
                error: err.message,
            })
        }

    }
} 