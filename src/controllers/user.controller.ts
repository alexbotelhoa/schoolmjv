import { CreateUser } from '../domain/users/create-user'
import { UpdateUser } from '../domain/users/update-user'
import { DeleteUser } from '../domain/users/delete-user'
import { SelectUsers } from '../domain/users/select-user'
import { ShowAllUsers } from '../domain/users/showAll-user'
import { PrismaUsersRepository } from './../repositories/prisma/prisma-users-repository'

interface IController {
  showAllUsers(): Promise<void>
  selectUser(): Promise<void>
  createUser(red: any, res: any): Promise<void>
  updateUser(red: any, res: any): Promise<void>
}

export function UserController() {
  const prismaUsersRepository = new PrismaUsersRepository()

  const showAllUsers = async (req: any, res: any): Promise<IController> => {
    const showAllUsers = new ShowAllUsers(prismaUsersRepository)

    const users = await showAllUsers.execute()

    return res.status(201).json({ data: users })
  }

  const selectUser = async (req: any, res: any): Promise<IController> => {
    const selectUser = new SelectUsers(prismaUsersRepository)
    const { id } = req.params
    const users = await selectUser.execute({
      id
    })

    return res.status(201).json({ data: users })
  }

  const createUser = async (req: any, res: any): Promise<IController> => {
    const { name, age, working } = req.body

    if (!name || !age || !working) {
      return res.status(400).json({ message: 'Request error' })
    }

    const createUser = new CreateUser(prismaUsersRepository)

    const user = await createUser.execute({
      name,
      age,
      working
    })

    return res.status(201).json({ data: user })
  }

  const updateUser = async (req: any, res: any): Promise<IController> => {
    const { id } = req.params
    const { name, age, working } = req.body

    if (!id || !name || !age) {
      return res.status(400).json({ message: 'Request error' })
    }

    const updateUser = new UpdateUser(prismaUsersRepository)

    const user = await updateUser.execute({
      id,
      name,
      age,
      working
    })

    return res.status(201).json({ data: user })
  }

  const deleteUser = async (req: any, res: any): Promise<IController> => {
    const { id } = req.params

    const deleteUser = new DeleteUser(prismaUsersRepository)

    const user = await deleteUser.execute({
      id
    })

    return res.status(201).json({ data: user })
  }

  return { 
    showAllUsers,
    selectUser,
    createUser,
    updateUser,
    deleteUser
  }
}
