import Bottle from '@app/database/models/bottle.model';
import Grape from '@app/database/models/grapes.model';
import MainProfile from '@app/database/models/mainProfile.model';
import Manufacturer from '@app/database/models/manufacturer.model';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { BottleCreateDto } from './dto/bottle-create.dto';

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

  private formatDate = (dateString: string): string => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const d = new Date(dateString);
    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public create(bottleData: BottleCreateDto): Promise<Bottle> {
    return this.bottleRepo.create({
      name: 'Test4',
      isOnlineAvailable: false,
      isAvailable: false,
      isSpecial: false,
      isPublic: false,
      mainProfileId: 1,
      vintageId: 1,
    });
  }
}
