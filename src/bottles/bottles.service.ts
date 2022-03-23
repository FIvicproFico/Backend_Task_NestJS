import Bottle from '@app/database/models/bottle.model';
import Grape from '@app/database/models/grapes.model';
import MainProfile from '@app/database/models/mainProfile.model';
import Manufacturer from '@app/database/models/manufacturer.model';

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

  async findOne(id: string): Promise<Bottle> {
    try {
      const bottle = await this.bottleRepo.findOne({
        where: { vinmonopoletId: id },
        include: [{ model: MainProfile, include: [{ model: Manufacturer }] }],
        raw: true,
        nest: true,
      });
      return bottle;
    } catch (error) {
      return;
    }
  }

  public async getBottlesMap(): Promise<Map<string, Bottle>> {
    const existingBottles = await this.bottleRepo.findAll({
      include: [{ model: MainProfile, include: [{ model: Manufacturer }] }],
      raw: true,
      nest: true,
    });

    const hashMap = new Map<string, Bottle>();
    existingBottles.forEach(bottle => {
      hashMap.set(bottle.name, bottle);
    });
    return hashMap;
  }
}
