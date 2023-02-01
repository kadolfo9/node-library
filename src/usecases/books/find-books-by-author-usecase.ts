import BooksRepository from "@/database/repositories/books-repository";
import { IBook } from "@/contracts/entities/book";
import NotFoundException from "@/exceptions/not-found-exception";

export default class FindBooksByAuthorUseCase {
    constructor(
        private readonly booksRepository: BooksRepository
    ) {
    }

    public async execute (author: string) {
        const authorBooks = await this.booksRepository.findByAuthor(author)

        if (!authorBooks) throw new NotFoundException('Não existem livros no nome deste autor.')

        return authorBooks
    }
}