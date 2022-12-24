import { IUser } from "models/entities/user";

export interface IUsersRepository {
    create (userData: IUser): Promise<IUser>
    findById (name: string): Promise<IUser>
    findByEmail (email: string): Promise<IUser>
    update (id: string, userData: IUser): Promise<IUser>
    delete (id: string): Promise<void>
}