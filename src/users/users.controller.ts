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

@UseGuards(BasicGuard, JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private myLoggerService: MyLoggerService,
  ) {}

  @Get()
  public getUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get('test')
  public getUsersQuery(): Promise<any> {
    return this.usersService.findAllQuery(
      "F%'; UPDATE User SET username='Hacked4' WHERE id > 0;",
    );
  }

  @Get(':id')
  async getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    console.log(typeof id);
    return await this.usersService.findOne(id);
  }

  @UseGuards(RolesGuard)
  @Post()
  async createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<[User, boolean]> {
    this.myLoggerService.myLog('Post');
    return await this.usersService.findOrCreate(createUserDto);
  }

  @UseGuards(RolesGuard)
  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<string> {
    await this.usersService.remove(id);
    return `This action removes a #${id} user`;
  }
}
