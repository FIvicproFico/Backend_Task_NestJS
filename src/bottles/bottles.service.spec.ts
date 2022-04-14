import Bottle from '@app/database/models/bottle.model';
import MainProfile from '@app/database/models/mainProfile.model';
import Manufacturer from '@app/database/models/manufacturer.model';
import Grape from '@app/database/models/grapes.model';
import BottleGrape from '@app/database/models/bottleGrape.model';
import Barcode from '@app/database/models/barcode.model';
import Vintage from '@app/database/models/vintage.model';

import { DatabaseModule } from '@app/database';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';

import sequalizeConfig from '../config/seq-config';

import { BottlesService } from './bottles.service';
import { BottlesController } from './bottles.controller';

describe('BottlesService', () => {
  let bottleService: BottlesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        DatabaseModule.register(sequalizeConfig),
        SequelizeModule.forFeature([
          Bottle,
          MainProfile,
          Manufacturer,
          Grape,
          BottleGrape,
          Barcode,
          Vintage,
        ]),
      ],
      controllers: [BottlesController],
      providers: [BottlesService],
    }).compile();

    bottleService = module.get<BottlesService>(BottlesService);
  });

  it('should be defined', () => {
    expect(bottleService).toBeDefined();
  });
});
