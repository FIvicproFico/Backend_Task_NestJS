import Bottle from '@app/database/models/bottle.model';

import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

import { BottlesService } from './bottles.service';

@Controller('bottles')
export class BottlesController {
  constructor(private bottlesService: BottlesService) {}

  @Get()
  public getAll(): Promise<Bottle[]> {
    return this.bottlesService.findAll();
  }

  @Get('map')
  public async getMap(): Promise<void> {
    const map = await this.bottlesService.getBottlesMap();
    console.log(map.get('Plavac3').mainProfile.manufacturer);
    return;
  }

  @Get(':id')
  public async getOne(@Param('id', ParseIntPipe) id: string): Promise<Bottle> {
    const bottle = await this.bottlesService.findOne(id);
    console.log(bottle.mainProfile.manufacturer);
    return bottle;
  }
}
