import Vintage from 'database/models/vintage.model';

import { Controller, Delete, Get, Param } from '@nestjs/common';

import { VintagesService } from './vintages.service';

@Controller('vintages')
export class VintagesController {
  constructor(private vintagesService: VintagesService) {}

  @Get()
  public getAll(): Promise<Vintage[]> {
    return this.vintagesService.findAll();
  }

  @Delete(':id')
  public delete(@Param('id') id: number): void {
    this.vintagesService.delete(id);
  }
}
