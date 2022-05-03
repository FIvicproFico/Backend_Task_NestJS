import Bottle from '@app/database/models/bottle.model';

import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';

import { BottlesService } from './bottles.service';
import { BottleCreateDto } from './dto/bottle-create.dto';

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

  @Post()
  public createBottle(@Body() values: BottleCreateDto): Promise<Bottle> {
    return this.bottlesService.create(values);
  }
}
