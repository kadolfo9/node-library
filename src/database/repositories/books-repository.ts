import Book, { IBook, IBookComment } from "@/contracts/entities/book";
import { IBooksRepository } from "@/contracts/repositories/books-repository";

import { prismaClient } from "@/database";

export default class BooksRepository implements IBooksRepository {

    async create(bookData: IBook): Promise<IBook> {
        return await prismaClient.books.create({
            data: {
                ...bookData
            }
        })
    }

    async findById(id: string): Promise<IBook> {
        return await prismaClient.books.findFirst({
            where: {
                id
            }
        })
    }

    async findByName(name: string): Promise<IBook> {
        return await prismaClient.books.findFirst({
            where: {
                name
            }
        })
    }

    async findByAuthor(author: string): Promise<IBook[]> {
        return await prismaClient.books.findMany({
            where: {
                author
            }
        })
    }

    async update(id: string, bookData: IBook): Promise<IBook> {
        return await prismaClient.books.update({
            where: {
                id
            },
            data: {
                ...bookData
            }
        })
    }

    async delete(id: string): Promise<void> {
        await prismaClient.books.delete({
            where: {
                id
            }
        })
    }

    async addComment(commentData: IBookComment): Promise<IBookComment> {
        return await prismaClient.booksComments.create({
            data: {
                ...commentData
            }
        })
    }

    async removeComment(id: string): Promise<void> {
        await prismaClient.booksComments.delete({
            where: {
                id
            }
        })
    }
}