import { ControllerResponse } from "@/contracts/controllers/controller";
import { BadRequestException } from "@/exceptions/bad-request-exception";
import { CreateBookUseCase } from "@/usecases/books/create-book-usecase";
import { Request, Response } from "express";
import StatusCode from "status-code-enum";

export default class CreateBookController {
    constructor(
        private readonly createBookUseCase: CreateBookUseCase
    ) { }

    public async execute(request: Request): Promise<ControllerResponse> {
        const { name, author, description } = request.body

        if (!name && !author && !description) throw new BadRequestException('Alguns dados para criação estão faltando.')

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