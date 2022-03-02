import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import sequalizeConfig from './config/seq-config';
import models from '../database/models';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      ...sequalizeConfig,
      models,
      synchronize: false,
    }),
    UsersModule,
    LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
