import { ControllerResponse } from "@/models/controllers/controller";
import { CreateBookUseCase } from "@/usecases/books/create-book-usecase";
import { Request, Response } from "express";
import StatusCode from "status-code-enum";

export class CreateBookController {
    constructor(
        private readonly createBookUseCase: CreateBookUseCase
    ) { }

    public async execute(request: Request): Promise<ControllerResponse> {
        const { name, author, description } = request.body

        const createBook = await this.createBookUseCase.execute({
            name,
            author,
            description
        })

        return {
            statusCode: StatusCode.SuccessAccepted,
            data: createBook
        }
    }
}