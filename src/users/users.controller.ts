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
import { RolesGuard } from 'src/guards/roles.guard';

import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { BasicGuard } from '../guards/basic-auth.guard';
import { User } from './user.model';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@UseGuards(BasicGuard)
@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private myLoggerService: MyLoggerService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUsers(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getUser(@Param('id', ParseIntPipe) id: string): Promise<User> {
    return await this.usersService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  async createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<[User, boolean]> {
    this.myLoggerService.myLog('Test');
    return await this.usersService.findOrCreate(createUserDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: string): Promise<string> {
    // await this.usersService.remove(id);
    return `This action removes a #${id} user`;
  }
}
