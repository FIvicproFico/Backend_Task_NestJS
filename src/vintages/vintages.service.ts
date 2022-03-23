import Vintage from '@app/database/models/vintage.model';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class VintagesService {
  constructor(
    @InjectModel(Vintage)
    private readonly vintageRepo: typeof Vintage,
  ) {}

  test(id: number): string {
    return `Vintage ${id}`;
  }

  async findAll(): Promise<Vintage[]> {
    try {
      const vintages = await this.vintageRepo.findAll();
      return vintages;
    } catch (error) {
      return [];
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.vintageRepo.destroy({
        where: { id },
      });
    } catch (error) {
      console.log(error);
    }
  }
}
