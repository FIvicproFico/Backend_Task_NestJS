import { Controller, Get, Post, UseGuards, Req } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

import { User } from '../users/user.model';
import { AuthService } from '../auth/auth.service';
import { LocalAuthGuard } from '../guards/local-auth.guard';

@Controller('login')
export class LoginController {
  constructor(private authService: AuthService) {}

  @Get()
  getLogin(): string {
    return 'Login!';
  }

  @Post()
  @UseGuards(LocalAuthGuard)
  async postLogin(@Req() req: Request & { user: User }) {
    return this.authService.login(req.user);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Req() req: Request & { user: User }) {
    return req.user;
  }
}

// @Post()
// @UseGuards(AuthGuard('local'))
// async postLogin(@Req() req: Request & { user: User }) {
//   return this.authService.login(req.user);
// }
