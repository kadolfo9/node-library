import { IBook, IBookComment } from "@/contracts/entities/book"

export interface IBooksRepository {
    create (bookData: IBook): Promise<IBook>
    findById (id: string): Promise<IBook>
    findByName (name: string): Promise<IBook>
    findByAuthor (author: string): Promise<IBook[]>
    update (id: string, bookData: IBook): Promise<IBook>
    delete (id: string): Promise<void>
    addComment(commentData: IBookComment): Promise<IBookComment>
}