import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

import { Controller, Get, Post, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { User } from 'src/users/user.model';

import { UsersService } from '../users/users.service';
import { AuthService } from '../auth/auth.service';

@Controller('login')
export class LoginController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Get()
  getLogin(): string {
    return 'Login!';
  }

  @Post()
  @UseGuards(AuthGuard('local'))
  async postLogin(@Req() req: Request & { user: User }) {
    return req.user;
  }
}

// @Post()
// @UseGuards(AuthGuard('local'))
// async postLogin(@Req() req: Request & { user: User }) {
//   return this.authService.login(req.user);
// }
