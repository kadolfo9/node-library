import { Controller, ControllerResponse } from "@/models/controllers/controller";
import { BadRequestException } from "@/models/exceptions/bad-request-exception";
import { DeleteBookUseCase } from "@/usecases/books/delete-book-usecase";
import { Request, Response } from "express";
import StatusCode from "status-code-enum";

export class DeleteBookController implements Controller {
    constructor(
        private readonly deleteBookUseCase: DeleteBookUseCase
    ) { }

    public async execute (request: Request): Promise<ControllerResponse> {
        const { id } = request.body

        if (!id) throw new BadRequestException('O id do livro está faltando.')

        await this.deleteBookUseCase.execute(id)

        return {
            statusCode: StatusCode.SuccessNoContent
        }
    }
}