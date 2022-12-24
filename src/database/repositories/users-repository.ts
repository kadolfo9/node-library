import { IUser } from "models/entities/user";
import { IUsersRepository } from "models/repositories/users-repository";
import { prismaClient } from "..";

export class UsersRepository implements IUsersRepository {
    
    async create (userData: IUser): Promise<IUser> {
        return await prismaClient.users.create({
            data: {
                ...userData
            }
        })
    }

    async findById (name: string): Promise<IUser> {
        return await prismaClient.users.findFirst({
            where: {
                name
            }
        })
    }

    async findByEmail(email: string): Promise<IUser> {
        return await prismaClient.users.findFirst({
            where: {
                email
            }
        })
    }

    async update(id: string, userData: IUser): Promise<IUser> {
        return await prismaClient.users.update({
            where: {
                id
            },
            data: {
                ...userData
            }
        })
    }
    
    async delete(id: string): Promise<void> {
        await prismaClient.users.delete({
            where: {
                id
            }
        })
    }
}