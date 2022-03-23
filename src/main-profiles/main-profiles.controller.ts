import MainProfile from '@app/database/models/mainProfile.model';
import Manufacturer from '@app/database/models/manufacturer.model';

import { Controller, Get } from '@nestjs/common';

import { MainProfilesService } from './main-profiles.service';

@Controller('main-profiles')
export class MainProfilesController {
  constructor(private mainProfilesService: MainProfilesService) {}

  @Get()
  public getAll(): Promise<MainProfile[]> {
    return this.mainProfilesService.findAll();
  }

  @Get('profile')
  public getMainProfiles(): Promise<MainProfile[]> {
    return this.mainProfilesService.findAllProfiles();
  }

  @Get('manufacturers')
  public getManufacturers(): Promise<Manufacturer[]> {
    return this.mainProfilesService.findAllManufacturers();
  }
}
