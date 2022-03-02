import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';

import { JWTGuard } from '../guards/auth.guard';
import { User } from './user.model';
import { UsersService } from './users.service';

@Controller('users')
@UseGuards(JWTGuard)
export class UsersController {
  constructor(private usersService: UsersService) {}

  // @Get()
  // findAll(): Promise<User[]> {
  //   const users = this.usersService.findAll();
  //   console.log(users);
  //   return users;
  // }

  @Get()
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: string): Promise<User> {
    return await this.usersService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: string): Promise<string> {
    // await this.usersService.remove(id);
    await console.log();
    return `This action removes a #${id} user`;
  }
}
