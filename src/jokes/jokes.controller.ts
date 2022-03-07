import { Controller, Get } from '@nestjs/common';

import { JokesService } from './jokes.service';

@Controller('jokes')
export class JokesController {
  constructor(private jokesService: JokesService) {}
  @Get()
  getJoke(): Promise<string> {
    return this.jokesService.getRandomJoke();
  }
}
