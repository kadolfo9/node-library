import { Book, IBook } from "@/models/entities/book";
import { IBooksRepository } from "@/models/repositories/books-repository";

import { prismaClient } from "@/database";

export class BooksRepository implements IBooksRepository {

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
}