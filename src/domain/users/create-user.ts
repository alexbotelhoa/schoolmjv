import { UsersRepository } from '../../repositories/users-repository'

export interface CreateUserRequest {
  name: string
  age: number
  working: boolean
}

export class CreateUser {
  constructor(
    private usersRepository: UsersRepository
  ) {}

  async execute(request: CreateUserRequest) {
    const { name, age, working } = request

    if (!name || !age || !working) {
      throw new Error('All fields is required')
    }

    return await this.usersRepository.create({
      name,
      age,
      working
    })
  }
}
