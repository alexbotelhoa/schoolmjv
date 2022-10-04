import { UsersRepository } from '../../repositories/users-repository'

export interface DeleteUserRequest {
  id: string
}

export class DeleteUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute(request: DeleteUserRequest) {
    const { id } = request

    if (!id) {
      throw new Error('All fields is required')
    }

    return await this.usersRepository.delete({ id })
  }
}
