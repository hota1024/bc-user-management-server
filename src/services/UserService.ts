import { getRepository } from '../db'
import { User } from '../entities/User'

/**
 * create a user.
 */
export const createUser = async (data: Partial<User>): Promise<User> => {
  const repository = await getRepository(User)

  const user = new User()
  user.email = data.email
  user.password = data.password

  return await repository.save(user)
}

/**
 * list users.
 */
export const listUsers = async (): Promise<User[]> => {
  const repository = await getRepository(User)

  return await repository.find()
}

/**
 * delete a user.
 *
 * @param id user id.
 */
export const deleteUser = async (id: number): Promise<void> => {
  const repository = await getRepository(User)

  repository.delete({ id })

  return
}
