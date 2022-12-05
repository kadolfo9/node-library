import { Controller, ControllerResponse } from "@/models/controllers/controller";
import { FindBookByNameUseCase } from "@/usecases/books/find-book-by-name-usecase";
import { Request, Response } from "express";
import StatusCode from "status-code-enum";

export class FindBookByNameController implements Controller {
    constructor(
        private readonly findBookByNameUseCase: FindBookByNameUseCase
    ) { }

    public async execute (request: Request): Promise<ControllerResponse> {
        const { name } = request.body

        const findBook = await this.findBookByNameUseCase.execute(name)

        return {
            statusCode: StatusCode.SuccessAccepted,
            data: findBook
        }
    }
}