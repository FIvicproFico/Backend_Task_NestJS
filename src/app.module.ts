import models from 'database/models';

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { APP_FILTER } from '@nestjs/core';

import sequalizeConfig from './config/seq-config';

import { UsersModule } from './users/users.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { AuthModule } from './auth/auth.module';
import { JokesModule } from './jokes/jokes.module';
import { EmailModule } from './email/email.module';
import { MainProfilesModule } from './main-profiles/main-profiles.module';
import { BottlesModule } from './bottles/bottles.module';
import { VintagesModule } from './vintages/vintages.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    SequelizeModule.forFeature(models),
    SequelizeModule.forRoot({
      ...sequalizeConfig,
      // models ,
      synchronize: true,
      autoLoadModels: true,
      logging: true,
    }),
    AuthModule,
    EmailModule,
    JokesModule,
    UsersModule,
    MainProfilesModule,
    BottlesModule,
    VintagesModule,
    TestModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
