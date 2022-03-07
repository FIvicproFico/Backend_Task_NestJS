import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { APP_FILTER } from '@nestjs/core';
import { MailerModule } from '@nestjs-modules/mailer';

import sequalizeConfig from './config/seq-config';
import models from '../database/models';
import env from './config/env-config';

import { UsersModule } from './users/users.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { AuthModule } from './auth/auth.module';
import { JokesModule } from './jokes/jokes.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      ...sequalizeConfig,
      models,
      synchronize: false,
    }),
    MailerModule.forRoot({
      transport: {
        service: env.mailService,
        ignoreTLS: true,
        secure: false,
        auth: {
          user: env.mailAddress,
          pass: env.appSpecificPassword,
        },
      },
      defaults: {
        from: '"No Reply" <no-reply@localhost>',
      },
      preview: true,
    }),
    UsersModule,
    AuthModule,
    JokesModule,
    EmailModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
