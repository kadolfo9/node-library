import { Controller, ControllerResponse } from "@/contracts/controllers/controller";
import { BadRequestException } from "@/exceptions/bad-request-exception";
import { FindBookByIdUseCase } from "@/usecases/books/find-book-by-id-usecase";
import { Request, Response } from "express";
import StatusCode from "status-code-enum";

export default class FindBookByIdController implements Controller {
    constructor(
        private readonly findBookByIdUseCase: FindBookByIdUseCase
    ) { }

    public async execute (request: Request): Promise<ControllerResponse> {
        const { id } = request.body

        if (!id) throw new BadRequestException('O id do livro está faltando.')

        const findBook = await this.findBookByIdUseCase.execute(id)

        return {
            statusCode: StatusCode.SuccessAccepted,
            data: findBook
        }
    }
}