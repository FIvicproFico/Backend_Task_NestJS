import Bottle from 'database/models/bottle.model';

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { BottlesController } from './bottles.controller';
import { BottlesService } from './bottles.service';

@Module({
  imports: [SequelizeModule.forFeature([Bottle])],
  controllers: [BottlesController],
  providers: [BottlesService],
})
export class BottlesModule {}
