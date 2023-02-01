import { IUser } from "@/contracts/entities/user";
import UsersRepository from "@/database/repositories/users-repository";
import ForbiddenException from "@/exceptions/forbidden-exception";

export default class CreateUserUseCase {
    constructor (
        private readonly usersRepository: UsersRepository
    ) {}

    public async execute(userData: IUser): Promise<IUser> {
        const findUser = await this.usersRepository.findByEmail(userData.email);

        if (findUser) throw new ForbiddenException("O usuário já está registrado.");

        const newUser = await this.usersRepository.create(userData);

        return newUser
    }
}