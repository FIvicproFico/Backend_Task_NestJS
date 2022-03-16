import MainProfile from 'database/models/mainProfile.model';
import Manufacturer from 'database/models/manufacturer.model';
import Vintage from 'database/models/vintage.model';
import Bottle from 'database/models/bottle.model';

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
        include: [{ model: Vintage, include: [{ model: Bottle }] }],
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