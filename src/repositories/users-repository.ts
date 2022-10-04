export interface UserResponse {
  id: string
  name: string
  age: number
  working: boolean
}
export interface UserCreate {
  name: string
  age: number
  working: boolean
}

export interface UserId {
  id: string
}

export interface UsersRepository {
  showAll: () => Promise<UserResponse[]>
  select: (data: UserId) => Promise<UserResponse[]>
  create: (data: UserCreate) => Promise<UserResponse>
  update: (data: UserResponse) => Promise<UserResponse>
  delete: (data: UserId) => Promise<UserResponse>
}
