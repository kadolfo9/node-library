import { CreateBookController } from "@/controllers/books/create-book-controller";
import { CreateBookCommentController } from "@/controllers/books/create-book-comment-controller";
import { UpdateBookController } from "@/controllers/books/update-book-controller";
import { DeleteBookController } from "@/controllers/books/delete-book-controller";
import { FindBookByIdController } from "@/controllers/books/find-book-by-id-controller";
import { FindBookByNameController } from "@/controllers/books/find-book-by-name-controller";
import { FindBooksByAuthorController } from "@/controllers/books/find-books-by-author-controller";

import { CreateBookCommentUseCase } from "@/usecases/books/comments/create-book-comment-usecase";
import { CreateBookUseCase } from "@/usecases/books/create-book-usecase";
import { UpdateBookUseCase } from "@/usecases/books/update-book-usecase";
import { DeleteBookUseCase } from "@/usecases/books/delete-book-usecase";
import { FindBookByIdUseCase } from "@/usecases/books/find-book-by-id-usecase";
import { FindBookByNameUseCase } from "@/usecases/books/find-book-by-name-usecase";
import { FindBooksByAuthorUseCase } from "@/usecases/books/find-books-by-author-usecase";

import BooksRepository from "@/database/repositories/books-repository";
import { ControllerExecutor as executor } from "@/contracts/controllers/controller";
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

export const findBookByIdUseCase = (): FindBookByIdUseCase => {
    return new FindBookByIdUseCase(
        new BooksRepository()
    )
}

export const findBookByIdController = (): RequestHandler => {
    return executor(
        new FindBookByIdController(
            findBookByIdUseCase()
        ))
}

export const updateBookUseCase = (): UpdateBookUseCase => {
    return new UpdateBookUseCase(
        new BooksRepository()
    )
}

export const updateBookController = (): RequestHandler => {
    return executor(
        new UpdateBookController(
            updateBookUseCase()
        )
    )
}

export const findBooksByAuthorUseCase = (): FindBooksByAuthorUseCase => {
    return new FindBooksByAuthorUseCase(
        new BooksRepository()
    )
}

export const findBooksByAuthorController = (): RequestHandler => {
    return executor(
        new FindBooksByAuthorController(
            findBooksByAuthorUseCase()
        )
    )
}

export const deleteBookUseCase = (): DeleteBookUseCase => {
    return new DeleteBookUseCase(
        new BooksRepository()
    )
}

export const deleteBookController = (): RequestHandler => {
    return executor(
        new DeleteBookController(
            deleteBookUseCase()
        )
    )
}

export const createBookCommentUseCase = (): CreateBookCommentUseCase => {
    return new CreateBookCommentUseCase(
        findBookByIdUseCase(),
        new BooksRepository()
    )
}

export const createBookCommentController = (): RequestHandler => {
    return executor(
        new CreateBookCommentController(
            createBookCommentUseCase()
        )
    )
}