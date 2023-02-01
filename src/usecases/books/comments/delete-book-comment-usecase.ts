import BooksRepository from "@/database/repositories/books-repository";
import { IBookComment } from "@/contracts/entities/book";
import NotFoundException from "@/exceptions/not-found-exception";
import FindBookByIdUseCase from "@/usecases/books/find-book-by-id-usecase";

export default class CreateBookCommentUseCase {
    constructor (
        private readonly findBookByIdUseCase: FindBookByIdUseCase,
        private readonly booksRepository: BooksRepository
    ) {
    }

    public async execute(bookId: string, commentId: string): Promise<void> {
        const findBook = await this.findBookByIdUseCase.execute(bookId)

        if (!findBook) throw new NotFoundException('O livro com este id não existe.')

        return await this.booksRepository.removeComment(commentId)
    }
}