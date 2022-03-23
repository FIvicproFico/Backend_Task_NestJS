import TestTable from '@app/database/models/testTable.model';
import TestTableOne from '@app/database/models/testTableOne.model';
import TestTableTwo from '@app/database/models/testTableTwo.model';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TestService {
  constructor(
    @InjectModel(TestTable)
    private readonly testRepo: typeof TestTable,
    @InjectModel(TestTableOne)
    private readonly testOneRepo: typeof TestTableOne,
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

  async delete(id: number): Promise<void> {
    try {
      await this.testRepo.destroy({
        where: { id },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async deleteOne(id: number): Promise<void> {
    try {
      await this.testOneRepo.destroy({
        where: { id },
      });
    } catch (error) {
      console.log(error);
    }
  }
}
