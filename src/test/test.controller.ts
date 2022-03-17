import TestTable from 'database/models/testTable.model';

import { Controller, Get } from '@nestjs/common';

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
}
