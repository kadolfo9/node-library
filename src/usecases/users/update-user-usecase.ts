import UsersRepository from "@/database/repositories/users-repository";
import { IUser } from "@/contracts/entities/user";
import NotFoundException from "@/exceptions/not-found-exception";

export default class UpdateUserUseCase {
    constructor(
        private readonly usersRepository: UsersRepository
    ) {
    }

    public async execute (id: string, userData: IUser): Promise<IUser> {
        const findUser = await this.usersRepository.findById(id)

        if (!findUser) throw new NotFoundException('Não existe livro neste id.')

        const updateUser = await this.usersRepository.update(id, userData)

        return updateUser
    }
}