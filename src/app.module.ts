import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import sequalizeConfig from './config/seq-config';
import models from './models';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      ...sequalizeConfig,
      models,
      synchronize: false,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
