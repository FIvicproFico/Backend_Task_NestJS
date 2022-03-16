import { Controller, Get } from '@nestjs/common';

import { BottlesService } from './bottles.service';

@Controller('bottles')
export class BottlesController {
  constructor(private bottlesService: BottlesService) {}

  @Get()
  public get() {
    return this.bottlesService.test(1);
  }
}
