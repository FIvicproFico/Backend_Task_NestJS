import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/user.model';

import env from '../config/env-config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: env.accessTokenSecret,
    });
  }

  async validate(payload: User): Promise<User> {
    const user = await this.usersService.findOneByEmail(payload.email);
    if (user) return user;
    return null;
  }
}
