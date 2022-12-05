import { CreateBookController } from "@/controllers/books/create-book-controller";
import { FindBookByNameController } from "@/controllers/books/find-book-by-name-controller";
import { BooksRepository } from "@/database/repositories/books-repository";
import { ControllerExecutor as executor } from "@/models/controllers/controller";
import { CreateBookUseCase } from "@/usecases/books/create-book-usecase";
import { FindBookByNameUseCase } from "@/usecases/books/find-book-by-name-usecase";
import { RequestHandler } from "express";

export const createBookUseCase = (): CreateBookUseCase => {
    return new CreateBookUseCase(
        new BooksRepository()
    )
}

export const createBookController = (): RequestHandler => {
    return executor(
        new CreateBookController(
            createBookUseCase()
        )
    )
}

export const findBookByNameUseCase = (): FindBookByNameUseCase => {
    return new FindBookByNameUseCase(
        new BooksRepository()
    )
}

export const findBookByNameController = (): RequestHandler => {
    return executor(
        new FindBookByNameController(
            findBookByNameUseCase()
        ))
}
