import { Controller, Get } from '@nestjs/common';

@Controller('jokes')
export class JokesController {
  @Get()
  getJoke(): string {
    return 'Joke!';
  }
}
