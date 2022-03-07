import axios from 'axios';

import { Injectable } from '@nestjs/common';
import { User } from 'src/users/user.model';

import { IServerData } from './interfaces/server-data.interface';

@Injectable()
export class JokesService {
  async getJoke(user: User): Promise<string> {
    console.log(user);
    const response = await axios.get<IServerData>(
      'http://api.icndb.com/jokes/random',
      { params: { firstName: user.name, lastName: user.surname } },
    );
    if (response.data) return response.data.value.joke;
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
