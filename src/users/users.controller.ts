import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { MyLoggerService } from '@lib/my-logger';

import { JWTGuard } from '../guards/auth.guard';
import { User } from './user.model';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
@UseGuards(JWTGuard)
export class UsersController {
  constructor(
    private usersService: UsersService,
    private myLoggerService: MyLoggerService,
  ) {}

  // @Get()
  // findAll(): Promise<User[]> {
  //   const users = this.usersService.findAll();
  //   console.log(users);
  //   return users;
  // }

  @Get()
  async getUsers(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async getUser(@Param('id', ParseIntPipe) id: string): Promise<User> {
    return await this.usersService.findOne(id);
  }

  @Post()
  async createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<[User, boolean]> {
    this.myLoggerService.myLog('Test');
    return await this.usersService.findOrCreate(createUserDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: string): Promise<string> {
    // await this.usersService.remove(id);
    await console.log();
    return `This action removes a #${id} user`;
  }
}
