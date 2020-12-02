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
