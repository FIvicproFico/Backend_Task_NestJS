import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

import env from '../config/env-config';

import { UserCredidentialsDto } from './dto/user-credidential.dto';

@Controller('login')
export class LoginController {
  constructor(private usersService: UsersService) {}

  @Get()
  getLogin(): string {
    return 'Login!';
  }

  @Post()
  async postLogin(
    @Body() userCredidentialsDto: UserCredidentialsDto,
  ): Promise<string> {
    const user = await this.usersService.findOneByEmail(
      userCredidentialsDto.email,
    );
    if (bcrypt.compareSync(userCredidentialsDto.password, user.password)) {
      const token = jwt.sign(
        {
          uuid: user.uuid,
          username: user.username,
          name: user.name,
          surname: user.surname,
          email: user.email,
          role: user.role,
        },
        env.accessTokenSecret,
        // { expiresIn: '1m' },
      );
      return token;
    }
    throw new HttpException(
      'Email or Password incorrect',
      HttpStatus.FORBIDDEN,
    );
  }
}
