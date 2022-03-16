import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { APP_FILTER } from '@nestjs/core';

import sequalizeConfig from './config/seq-config';
import models from '../database/models';

import { UsersModule } from './users/users.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { AuthModule } from './auth/auth.module';
import { JokesModule } from './jokes/jokes.module';
import { EmailModule } from './email/email.module';
import { MainProfilesModule } from './main-profiles/main-profiles.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      ...sequalizeConfig,
      models,
      synchronize: false,
    }),
    UsersModule,
    AuthModule,
    JokesModule,
    EmailModule,
    MainProfilesModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
