import { IUser } from "models/entities/user";
import { IUsersRepository } from "models/repositories/users-repository";

export class UsersRepository implements IUsersRepository {
    
    async create (userData: IUser): Promise<void> {
        
    }

    async findById (name: string): Promise<void> {

    }

    async findByEmail(email: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async update(id: string, userData: IUser): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}