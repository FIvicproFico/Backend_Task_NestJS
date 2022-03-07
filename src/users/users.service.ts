import * as bcrypt from 'bcrypt';

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { v4 as uuidv4 } from 'uuid';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    try {
      const users = await this.userModel.findAll();
      return users;
    } catch (error) {
      return [];
    }
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userModel.findOne({
      where: {
        id,
      },
      raw: false,
    });
    if (user) {
      return user;
    }
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  async findOneByEmail(email: string): Promise<User> {
    const user = await this.userModel.findOne({
      where: {
        email,
      },
      raw: true,
    });
    if (user) return user;
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  findOrCreate(createUserDto: CreateUserDto): Promise<[User, boolean]> {
    const hash = bcrypt.hashSync(createUserDto.password, 10);
    return this.userModel.findOrCreate({
      where: {
        username: createUserDto.username,
        email: createUserDto.email,
      },
      defaults: {
        uuid: uuidv4(),
        password: hash,
        name: createUserDto.name,
        surname: createUserDto.surname,
        role: createUserDto.role,
      },
    });
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
