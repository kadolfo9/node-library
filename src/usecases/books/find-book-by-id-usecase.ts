import { BooksRepository } from "@/database/repositories/books-repository";
import { NotFoundException } from "@/models/exceptions/not-found-exception";

export class FindBookByIdUseCase {
    constructor(
        private readonly booksRepository: BooksRepository
    ) {
    }

    public async execute (id: string) {
        const findBook = await this.booksRepository.findById(id);

        if (!findBook) throw new NotFoundException('Não existe livro neste id.')

        return findBook
    }
}