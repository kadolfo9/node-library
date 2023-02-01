import BooksRepository from "@/database/repositories/books-repository";
import { IBook } from "@/contracts/entities/book";
import NotFoundException from "@/exceptions/not-found-exception";

export default class UpdateBookUseCase {
    constructor(
        private readonly booksRepository: BooksRepository
    ) {
    }

    public async execute (id: string, bookData: IBook) {
        const findBook = await this.booksRepository.findById(id);

        if (!findBook) throw new NotFoundException('Não existe livro neste id.')

        const updateBook = await this.booksRepository.update(id, bookData);

        return updateBook
    }
}