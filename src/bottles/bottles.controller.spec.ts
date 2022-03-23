import models from '@app/database/models';

import { DatabaseModule } from '@app/database';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';

import sequalizeConfig from '../config/seq-config';

import { BottlesController } from './bottles.controller';
import { BottlesService } from './bottles.service';

describe('BottlesController', () => {
  let controller: BottlesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        DatabaseModule.register(sequalizeConfig),
        SequelizeModule.forFeature(models),
      ],
      controllers: [BottlesController],
      providers: [BottlesService],
    }).compile();

    controller = module.get<BottlesController>(BottlesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
