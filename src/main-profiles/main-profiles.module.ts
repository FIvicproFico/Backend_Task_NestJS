import MainProfile from 'database/models/mainProfile.model';
import Manufacturer from 'database/models/manufacturer.model';

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { MainProfilesController } from './main-profiles.controller';
import { MainProfilesService } from './main-profiles.service';

@Module({
  imports: [SequelizeModule.forFeature([MainProfile, Manufacturer])],
  controllers: [MainProfilesController],
  providers: [MainProfilesService],
})
export class MainProfilesModule {}
