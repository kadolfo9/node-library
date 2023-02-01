import { IUser } from "@/contracts/entities/user";
import UsersRepository from "@/database/repositories/users-repository";
import NotFoundException from "@/exceptions/not-found-exception";

export default class FindUserByEmailUseCase {
    constructor (
        private readonly usersRepository: UsersRepository
    ) {}

    public async execute(email: string): Promise<IUser> {
        const findUser = await this.usersRepository.findByEmail(email)

        if (!findUser) throw new NotFoundException("O registro deste usuário não foi encontrado.");

        return findUser
    }
}