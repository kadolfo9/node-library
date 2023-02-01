import BooksRepository from "@/database/repositories/books-repository";
import { IBook } from "@/contracts/entities/book";
import ForbiddenException from "@/exceptions/forbidden-exception";

export default class CreateBookUseCase {
    constructor (
        private readonly booksRepository: BooksRepository
    ) {
    }

    public async execute(bookData: IBook) {
        const findBook = await this.booksRepository.findById(bookData.id)

        if (findBook) throw new ForbiddenException('O livro que está tentando registrar já existe.')

        const newBook = await this.booksRepository.create(bookData)

        return newBook
    }
}