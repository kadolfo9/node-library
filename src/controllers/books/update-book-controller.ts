import { Controller, ControllerResponse } from "@/models/controllers/controller";
import { BadRequestException } from "@/models/exceptions/bad-request-exception";
import { UpdateBookUseCase } from "@/usecases/books/update-book-usecase";
import { Request, Response } from "express";
import StatusCode from "status-code-enum";

export class UpdateBookController implements Controller {
    constructor(
        private readonly updateBookUseCase: UpdateBookUseCase
    ) { }

    public async execute(request: Request): Promise<ControllerResponse> {
        const { id, data } = request.body
        const { name, author, description } = data

        if (!id && !name && !author && !description) throw new BadRequestException('Alguns dados para criação estão faltando.')

        const updateBook = await this.updateBookUseCase.execute(id, data)

        return {
            statusCode: StatusCode.SuccessAccepted,
            data: updateBook
        }
    }
}