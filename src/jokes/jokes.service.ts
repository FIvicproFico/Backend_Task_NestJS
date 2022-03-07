import axios from 'axios';

import { Injectable } from '@nestjs/common';

import { IServerData } from './interfaces/server-data.interface';

@Injectable()
export class JokesService {
  async getRandomJoke(): Promise<string> {
    const response = await axios.get<IServerData>(
      'http://api.icndb.com/jokes/random',
    );
    if (response.data) return response.data.value.joke;
    return '';
  }
}
