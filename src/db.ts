import { Connection, createConnection, Repository } from 'typeorm'

/**
 * get db connection.
 */
export const getConnection = async (): Promise<Connection> => {
  const db = await createConnection({
    type: 'sqlite',
    database: 'db.sqlite',
    synchronize: true,
    logging: false,
    entities: ['src/entities/**/*.ts'],
    migrations: ['src/migrations/**/*.ts'],
    subscribers: ['src/subscribers/**/*.ts'],
  })

  return db
}

/**
 * get repository.
 */
export const getRepository = async <T>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  model: new (...args: any[]) => T
): Promise<Repository<T>> => {
  const db = await getConnection()

  return db.getRepository(model)
}
