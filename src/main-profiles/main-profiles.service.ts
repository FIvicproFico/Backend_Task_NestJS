import MainProfile from '@app/database/models/mainProfile.model';
import Manufacturer from '@app/database/models/manufacturer.model';
import Vintage from '@app/database/models/vintage.model';
import Bottle from '@app/database/models/bottle.model';
import Grape from '@app/database/models/grapes.model';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class MainProfilesService {
  constructor(
    @InjectModel(MainProfile)
    private readonly mainProfileRepo: typeof MainProfile,
    @InjectModel(Manufacturer)
    private readonly manufacturerRepo: typeof Manufacturer,
  ) {}

  test(id: number): string {
    return `Main profile ${id}`;
  }

  async findAll(): Promise<MainProfile[]> {
    try {
      const mainProfiles = await this.mainProfileRepo.findAll({
        include: [
          {
            model: Vintage,
            include: [{ model: Bottle, include: [{ model: Grape }] }],
          },
        ],
      });
      return mainProfiles;
    } catch (error) {
      return [];
    }
  }

  async findAllProfiles(): Promise<MainProfile[]> {
    try {
      const mainProfiles = await this.mainProfileRepo.findAll({
        include: [{ model: Manufacturer }],
      });
      return mainProfiles;
    } catch (error) {
      return [];
    }
  }

  async findAllManufacturers(): Promise<Manufacturer[]> {
    try {
      const manufacturers = await this.manufacturerRepo.findAll({
        include: [{ model: MainProfile }],
      });
      return manufacturers;
    } catch (error) {
      return [];
    }
  }
}
