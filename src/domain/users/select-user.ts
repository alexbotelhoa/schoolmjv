import { UsersRepository } from '../../repositories/users-repository'

export interface DeleteUserRequest {
  id: string
}

export class SelectUsers {
  constructor(private usersRepository: UsersRepository) {}

  async execute(request: DeleteUserRequest) {
    const { id } = request

    if (!id) {
      throw new Error('All fields is required')
    }

    return await this.usersRepository.select({ id })
  }
}
