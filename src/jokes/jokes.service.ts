import axios from 'axios';
import env from 'src/config/env-config';

import { Injectable } from '@nestjs/common';
import { User } from 'src/users/user.model';
import { EmailService } from 'src/email/email.service';

import { IServerData } from './interfaces/server-data.interface';
import { IMailOptions } from './interfaces/mail-options.interface';

@Injectable()
export class JokesService {
  constructor(private emailService: EmailService) {}

  async getJoke(user: User): Promise<string> {
    const response = await axios.get<IServerData>(
      'http://api.icndb.com/jokes/random',
      { params: { firstName: user.name, lastName: user.surname } },
    );
    if (response.data) {
      const joke = response.data.value.joke;
      const mailOptions: IMailOptions = {
        to: user.email,
        from: env.mailFrom,
        subject: env.mailSubject,
        text: joke,
      };
      await this.emailService.sendEmail(mailOptions);
      return joke;
    }
    return '';
  }

  async getRandomJoke(): Promise<string> {
    const response = await axios.get<IServerData>(
      'http://api.icndb.com/jokes/random',
    );
    if (response.data) return response.data.value.joke;
    return '';
  }
}
