import { Controller, ControllerResponse } from "@/contracts/controllers/controller";
import { BadRequestException } from "@/exceptions/bad-request-exception";
import { FindBookByNameUseCase } from "@/usecases/books/find-book-by-name-usecase";
import { Request, Response } from "express";
import StatusCode from "status-code-enum";

export default class FindBookByNameController implements Controller {
    constructor(
        private readonly findBookByNameUseCase: FindBookByNameUseCase
    ) { }

    public async execute (request: Request): Promise<ControllerResponse> {
        const { name } = request.body

        if (!name) throw new BadRequestException('O nome do livro está faltando.')

        const findBook = await this.findBookByNameUseCase.execute(name)

        return {
            statusCode: StatusCode.SuccessAccepted,
            data: findBook
        }
    }
}