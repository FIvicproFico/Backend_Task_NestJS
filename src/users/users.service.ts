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
    private userModel: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findOne(id: string): Promise<User | null> {
    const user = await this.userModel.findOne({
      where: {
        id,
      },
      raw: true,
    });
    if (user) return user;
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  async findOneByUsername(username: string): Promise<User> {
    const user = await this.userModel.findOne({
      where: {
        username,
      },
      raw: true,
    });
    if (user) return user;
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

  async findOrCreate(createUserDto: CreateUserDto): Promise<[User, boolean]> {
    const hash = bcrypt.hashSync(createUserDto.password, 10);
    return await this.userModel.findOrCreate({
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

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
