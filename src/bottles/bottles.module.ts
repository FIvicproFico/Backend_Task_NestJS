import Bottle from '@app/database/models/bottle.model';
import Grape from '@app/database/models/grapes.model';
import BottleGrape from '@app/database/models/bottleGrape.model';
import Barcode from '@app/database/models/barcode.model';

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { BottlesController } from './bottles.controller';
import { BottlesService } from './bottles.service';

@Module({
  imports: [SequelizeModule.forFeature([Bottle, BottleGrape, Grape, Barcode])],
  controllers: [BottlesController],
  providers: [BottlesService],
})
export class BottlesModule {}
