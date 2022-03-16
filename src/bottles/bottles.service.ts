import Bottle from 'database/models/bottle.model';
import Grape from 'database/models/grapes.model';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class BottlesService {
  constructor(
    @InjectModel(Bottle)
    private readonly bottleRepo: typeof Bottle,
  ) {}

  test(id: number): string {
    return `Bottle ${id}`;
  }

  async findAll(): Promise<Bottle[]> {
    try {
      const bottles = await this.bottleRepo.findAll({
        include: [{ model: Grape }],
      });
      return bottles;
    } catch (error) {
      return [];
    }
  }
}
