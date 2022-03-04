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
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

import { BasicGuard } from '../guards/basic-auth.guard';
import { User } from './user.model';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
@UseGuards(BasicGuard)
export class UsersController {
  constructor(
    private usersService: UsersService,
    private myLoggerService: MyLoggerService,
  ) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getUsers(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getUser(@Param('id', ParseIntPipe) id: string): Promise<User> {
    return await this.usersService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<[User, boolean]> {
    this.myLoggerService.myLog('Test');
    return await this.usersService.findOrCreate(createUserDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteUser(@Param('id', ParseIntPipe) id: string): Promise<string> {
    // await this.usersService.remove(id);
    return `This action removes a #${id} user`;
  }
}
