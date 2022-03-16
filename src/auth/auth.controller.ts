import User from 'database/models/user.model';

import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'src/guards/local-auth.guard';
import { UsersService } from 'src/users/users.service';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Get()
  getLogin(): string {
    return 'Auth!';
  }

  @UseGuards(LocalAuthGuard)
  @Post()
  postLogin(@Req() req: Request & { user: User }): string {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req: Request & { user: User }): Promise<User> {
    return this.usersService.findOneByEmail(req.user.email);
  }
}
