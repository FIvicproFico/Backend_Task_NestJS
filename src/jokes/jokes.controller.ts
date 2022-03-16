import User from 'database/models/user.model';

import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

import { JokesService } from './jokes.service';

@UseGuards(JwtAuthGuard)
@Controller('jokes')
export class JokesController {
  constructor(private jokesService: JokesService) {}

  @Get()
  getJoke(@Req() req: Request & { user: User }): Promise<string> {
    return this.jokesService.getJoke(req.user);
  }

  @Get('random')
  getRandomJoke(): Promise<string> {
    return this.jokesService.getRandomJoke();
  }
}
