export interface IUser {
    id?: string
    name: string
    email: string
    password: string

    createdAt?: Date
    updatedAt?: Date
}

export class User {
    private id: string
    private name: string
    private email: string
    private password: string
    private createdAt: Date
    private updatedAt: Date

    constructor(data: IUser) {
        this.id = data.id
        this.name = data.name
        this.email = data.email
        this.password = data.password
        this.createdAt = data.createdAt ?? new Date()
        this.updatedAt = data.updatedAt ?? new Date()
    }

    public getPassword(): string {
        return this.password
    }

    public getData() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }
}