import { Router } from 'express'
import { GamesRepository } from '../modules/games/repositories/implementations/GamesRepository'

const gamesRoutes = Router()

gamesRoutes.get('/title-containing', async (request, response) => {
  const { title } = request.query

  const repository = new GamesRepository()

  const games = await repository.findByTitleContaining(title as string)

  return response.status(201).json(games)
})

gamesRoutes.get('/count-all-games', async (request, response) => {
  const repository = new GamesRepository()

  const games = await repository.countAllGames()

  return response.status(201).json(games)
})

gamesRoutes.get('/find-user-by-game-id/:id', async (request, response) => {
  const { id } = request.params

  const repository = new GamesRepository()

  const user = await repository.findUsersByGameId(id)

  return response.status(201).json(user)
})

export { gamesRoutes }