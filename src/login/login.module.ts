import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';

import { LoginController } from './login.controller';

@Module({
  imports: [UsersModule],
  controllers: [LoginController],
  providers: [],
})
export class LoginModule {}
