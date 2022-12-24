import { ControllerResponse } from "@/models/controllers/controller"
import { BadRequestException } from "@/models/exceptions/bad-request-exception"
import { CreateBookCommentUseCase } from "@/usecases/books/create-book-comment-usecase"
import { Request } from "express"
import StatusCode from "status-code-enum"

export class CreateBookCommentController {
    constructor(
        private readonly createBookCommentUseCase: CreateBookCommentUseCase
    ) { }

    public async execute(request: Request): Promise<ControllerResponse> {
        const { bookId, userId, comment } = request.body

        if (!bookId && !userId && !comment) throw new BadRequestException('Alguns dados para criação estão faltando.')

        const createBookComment = await this.createBookCommentUseCase.execute({
            bookId,
            userId,
            comment
        })

        return {
            statusCode: StatusCode.SuccessAccepted,
            data: createBookComment
        }
    }
}