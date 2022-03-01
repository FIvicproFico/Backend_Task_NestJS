import { Controller, Delete, Get, Param, ParseIntPipe } from '@nestjs/common';
import { User } from './user.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    const users = await this.usersService.findAll();
    return users;
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: string): Promise<User> {
    const user = await this.usersService.findOne(id);
    return user;
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: string): Promise<string> {
    // await this.usersService.remove(id);
    await console.log();
    return `This action removes a #${id} user`;
  }
}
