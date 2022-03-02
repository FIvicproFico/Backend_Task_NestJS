import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

import { User } from '../users/user.model';
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
  ): Promise<User> {
    console.log(userCredidentialsDto);
    return await this.usersService.findOneByEmail(userCredidentialsDto.email);
  }
}
