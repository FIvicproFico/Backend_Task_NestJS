import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MyLoggerModule } from '@lib/my-logger';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.model';

@Module({
  imports: [SequelizeModule.forFeature([User]), MyLoggerModule],
  exports: [UsersService],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
