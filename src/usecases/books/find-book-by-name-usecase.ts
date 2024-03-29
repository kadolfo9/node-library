import BooksRepository from "@/database/repositories/books-repository";
import NotFoundException from "@/exceptions/not-found-exception";

export default class FindBookByNameUseCase {
    constructor(
        private readonly booksRepository: BooksRepository
    ) {
    }

    public async execute (name: string) {
        const findBook = await this.booksRepository.findByName(name);

        if (!findBook) throw new NotFoundException('Não existe livro com este nome.')

        return findBook
    }
}