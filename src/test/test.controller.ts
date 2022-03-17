import TestTable from 'database/models/testTable.model';

import { Controller, Delete, Get, Param } from '@nestjs/common';

import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(private testService: TestService) {}

  @Get()
  public test() {
    return this.testService.test(1);
  }

  @Get('tests')
  public getAll(): Promise<TestTable[]> {
    return this.testService.findAll();
  }

  @Delete('tests/:id')
  public delete(@Param('id') id: number): void {
    this.testService.delete(id);
  }

  @Delete('tests/one/:id')
  public deleteOne(@Param('id') id: number): void {
    this.testService.delete(id);
  }
}
