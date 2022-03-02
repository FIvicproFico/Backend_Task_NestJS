import { Controller, Get } from '@nestjs/common';

import { User } from '../users/user.model';

@Controller('login')
export class LoginController {
  @Get()
  get() {
    return `This action returns Login`;
  }
}
