import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';

import { LoginController } from './login.controller';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [LoginController],
  providers: [],
})
export class LoginModule {}
