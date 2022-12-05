import { 
    createBookController, 
    findBookByNameController 
    } from "@/factories/books";
import { Router } from "express";

export const Routes = Router()

// Middleware detector soon
Routes.post('/books', createBookController());
Routes.get('/books/:id', findBookByNameController());
