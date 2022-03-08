import env from 'src/config/env-config';

import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';

import { EmailService } from './email.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        service: env.mailService,
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
      template: {
        // dir: './templates' // If templates are in root folder
        dir: '/Users/filipivic/Projects/bt-nestjs/dist/email/templates',
        adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
        options: {
          strict: true,
        },
      },
    }),
  ],
  exports: [EmailService],
  providers: [EmailService],
})
export class EmailModule {}
