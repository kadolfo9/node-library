import { 
    createBookCommentController,
    createBookController, 
    deleteBookController, 
    findBookByIdController, 
    findBookByNameController, 
    findBooksByAuthorController,
    updateBookController
} from "@/factories/books";

import { Router } from "express";

export const Routes = Router()

// Middleware detector soon

// Books Routes
Routes.post('/books', createBookController())
Routes.put('/books', updateBookController())
Routes.delete('/books', deleteBookController())

Routes.get('/books/:id', findBookByIdController())
Routes.get('/books/:name', findBookByNameController())
Routes.get('/books/author/:author', findBooksByAuthorController())

Routes.post('/books/comments', createBookCommentController())

// Users Routes