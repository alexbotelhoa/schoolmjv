import { UsersRepository } from '../../repositories/users-repository'

export class ShowAllUsers {
  constructor(private usersRepository: UsersRepository) {}

  async execute() {
    return await this.usersRepository.showAll()
  }
}
