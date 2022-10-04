import { prisma } from '../../prisma'
import {
  UsersRepository,
  UserResponse,
  UserCreate,
  UserId
} from './../users-repository'

export class PrismaUsersRepository implements UsersRepository {
  async showAll() {
    return (await prisma.user.findMany({
      orderBy: {
        createdAt: 'asc'
      }
    })) as UserResponse[]
  }

  async select({ id }: UserId) {
    return (await prisma.user.findMany({
      where: {
        id
      }
    })) as UserResponse[]
  }

  async create({ name, age, working }: UserCreate) {
    return (await prisma.user.create({
      data: {
        name,
        age,
        working
      }
    })) as UserResponse
  }

  async update({ id, name, age, working }: UserResponse) {
    return (await prisma.user.update({
      where: {
        id
      },
      data: {
        name,
        age,
        working
      }
    })) as UserResponse
  }

  async delete({ id }: UserId) {
    return (await prisma.user.delete({
      where: {
        id
      }
    })) as UserResponse
  }
}
