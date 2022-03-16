import Bottle from 'database/models/bottle.model';

import { Controller, Get } from '@nestjs/common';

import { BottlesService } from './bottles.service';

@Controller('bottles')
export class BottlesController {
  constructor(private bottlesService: BottlesService) {}

  @Get()
  public getAll(): Promise<Bottle[]> {
    return this.bottlesService.findAll();
  }
}
