import { IUser } from "@/contracts/entities/user";
import UsersRepository from "@/database/repositories/users-repository";
import ForbiddenException from "@/exceptions/forbidden-exception";

export default class DeleteUserUseCase {
    constructor (
        private readonly usersRepository: UsersRepository
    ) {}

    public async execute(id: string): Promise<void> {
        const findUser = await this.usersRepository.findById(id)

        if (!findUser) throw new ForbiddenException("O usuário já está registrado.")

        return await this.usersRepository.delete(id)
    }
}