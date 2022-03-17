import Vintage from 'database/models/vintage.model';

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { VintagesController } from './vintages.controller';
import { VintagesService } from './vintages.service';

@Module({
  imports: [SequelizeModule.forFeature([Vintage])],
  controllers: [VintagesController],
  providers: [VintagesService],
})
export class VintagesModule {}
