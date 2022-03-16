import * as bcrypt from 'bcrypt';

import User from 'database/models/user.model';

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async compare(credPassword: string, dbPassword: string): Promise<boolean> {
    const match = await bcrypt.compare(credPassword, dbPassword);
    return match;
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.usersService.findOneByEmail(email);
    if (await this.compare(password, user.password)) {
      //const { password, ...rest } = user;
      return user;
    }
    return null;
  }

  login(user: User): string {
    const payload = {
      uuid: user.uuid,
      username: user.username,
      name: user.name,
      surname: user.surname,
      email: user.email,
      role: user.role,
    };
    const access_token = this.jwtService.sign(payload);
    return access_token;
  }
}
