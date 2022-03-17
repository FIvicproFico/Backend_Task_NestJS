import TestTable from 'database/models/testTable.model';
import TestTableOne from 'database/models/testTableOne.model';
import TestTableTwo from 'database/models/testTableTwo.model';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TestService {
  constructor(
    @InjectModel(TestTable)
    private readonly testRepo: typeof TestTable,
  ) {}

  test(id: number): string {
    return `Test ${id}`;
  }

  async findAll(): Promise<TestTable[]> {
    try {
      const tests = await this.testRepo.findAll({
        include: [{ model: TestTableOne }, { model: TestTableTwo }],
      });
      return tests;
    } catch (error) {
      return [];
    }
  }
}
