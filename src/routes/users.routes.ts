import { Router } from 'express'
import { UsersRepository } from '../modules/users/repositories/implementations/UsersRepository'

const usersRoutes = Router()

usersRoutes.get('/withgames/:id', async (request, response) => {
  const { id } = request.params

  const repository = new UsersRepository()

  const user = await repository.findUserWithGamesById({ user_id: id })

  return response.status(201).json(user)
})

usersRoutes.get('/first-name', async (request, response) => {
  const repository = new UsersRepository()

  const user = await repository.findAllUsersOrderedByFirstName()

  return response.status(201).json(user)
})

usersRoutes.get('/search-by-name', async (request, response) => {
  const { first_name, last_name } = request.query

  const repository = new UsersRepository()

  const user = await repository.findUserByFullName({
    first_name: first_name as string,
    last_name: last_name as string,
  })

  return response.status(201).json(user)
})

export { usersRoutes }