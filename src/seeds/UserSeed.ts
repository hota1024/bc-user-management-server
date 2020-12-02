import { createUser } from '../services/UserService'
;(async () => {
  await createUser({
    email: 'hotalog@hota1024.com',
    password: 'test',
  })
})()
