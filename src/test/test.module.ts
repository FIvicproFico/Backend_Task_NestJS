import TestTable from 'database/models/testTable.model';
import TestTableOne from 'database/models/testTableOne.model';
import TestTableTwo from 'database/models/testTableTwo.model';

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { TestController } from './test.controller';
import { TestService } from './test.service';

@Module({
  imports: [
    SequelizeModule.forFeature([TestTable, TestTableOne, TestTableTwo]),
  ],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
