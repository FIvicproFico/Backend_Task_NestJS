import TestTable from 'database/models/testTable.model';

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { TestController } from './test.controller';
import { TestService } from './test.service';

@Module({
  imports: [SequelizeModule.forFeature([TestTable])],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
