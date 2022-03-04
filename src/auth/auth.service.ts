import * as bcrypt from 'bcrypt';

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.model';

import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<User> {
    const user = await this.usersService.findOneByUsername(username);
    if (bcrypt.compareSync(pass, user.password)) {
      //const { password, ...rest } = user;
      return user;
    }
    return null;
  }

  async login(user: User): Promise<string> {
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
