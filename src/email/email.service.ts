import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { IMailOptions } from 'src/jokes/interfaces/mail-options.interface';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail(mailOptions: IMailOptions): Promise<void> {
    await this.mailerService.sendMail(mailOptions);
    console.log(__dirname);
  }
}
