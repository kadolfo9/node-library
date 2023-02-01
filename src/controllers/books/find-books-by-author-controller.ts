import { Controller, ControllerResponse } from "@/contracts/controllers/controller";
import { BadRequestException } from "@/exceptions/bad-request-exception";
import { FindBooksByAuthorUseCase } from "@/usecases/books/find-books-by-author-usecase";
import { Request, Response } from "express";
import StatusCode from "status-code-enum";

export default class FindBooksByAuthorController implements Controller {
    constructor(
        private readonly findBooksByAuthorUseCase: FindBooksByAuthorUseCase
    ) { }

    public async execute (request: Request): Promise<ControllerResponse> {
        const { author } = request.body

        if (!author) throw new BadRequestException('O nome do autor está faltando.')

        const findBooks = await this.findBooksByAuthorUseCase.execute(author)

        return {
            statusCode: StatusCode.SuccessAccepted,
            data: findBooks
        }
    }
}