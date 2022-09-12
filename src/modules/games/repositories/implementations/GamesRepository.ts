import { getRepository, Repository } from 'typeorm';

import { User } from '../../../users/entities/User';
import { Game } from '../../entities/Game';

import { IGamesRepository } from '../IGamesRepository';

export class GamesRepository implements IGamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Game);
  }

  async findByTitleContaining(param: string): Promise<Game[]> {
    const games = this.repository.createQueryBuilder()

    return games.where("title ILIKE :title", { title: `%${param}%` }).getMany()
  }

  async countAllGames(): Promise<[{ count: string }]> {
    return this.repository.query(
      `SELECT COUNT(*) FROM games`
    );
  }

  async findUsersByGameId(id: string): Promise<User[]> {
    const game = this.repository.createQueryBuilder()

    return game.relation(Game, "users").of(id).loadMany()
  }
}
