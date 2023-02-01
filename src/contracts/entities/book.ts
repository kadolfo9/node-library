export interface IBook {
    id?: string
    name: string
    author: string
    description: string

    createdAt?: Date
    updatedAt?: Date
}

export interface IBookComment {
    id?: string
    bookId: string
    userId: string

    comment: string

    createdAt?: Date
    updatedAt?: Date
}

export default class Book {
    private id: string
    private name: string
    private author: string
    private description: string
    private createdAt: Date
    private updatedAt: Date

    constructor(data: IBook) {
        this.id = data.id
        this.name = data.name
        this.author = data.author
        this.description = data.description
        this.createdAt = data.createdAt ?? new Date()
        this.updatedAt = data.updatedAt ?? new Date()
    }

    public getData() {
        return {
            id: this.id,
            name: this.name,
            author: this.author,
            description: this.description,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }
}