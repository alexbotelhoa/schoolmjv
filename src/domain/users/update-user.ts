import { UsersRepository } from '../../repositories/users-repository'

export interface UpdateUserRequest {
  id: string
  name: string
  age: number
  working: boolean
}

export class UpdateUser {
  constructor(
    private usersRepository: UsersRepository
  ) {}

  async execute(request: UpdateUserRequest) {
    const { id, name, age, working } = request

    if (!id || !name || !age) {
      throw new Error('All fields is required')
    }

    return await this.usersRepository.update({
      id,
      name,
      age,
      working
    })
  }
}
