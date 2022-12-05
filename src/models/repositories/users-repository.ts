import { IUser } from "models/entities/user";

export interface IUsersRepository {
    create (userData: IUser): Promise<void>
    findById (name: string): Promise<void>
    findByEmail (email: string): Promise<void>
    update (id: string, userData: IUser): Promise<void>
    delete (id: string): Promise<void>
}