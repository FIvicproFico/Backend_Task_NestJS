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

  // if there is bearer token (jwt) in request header
  async validate(payload: User): Promise<User> {
    const user = await this.usersService.findOneByUsername(payload.username);
    if (user) return user;
    return null;
  }
}

// {
//   uuid: payload.uuid,
//   username: payload.username,
//   name: payload.name,
//   surname: payload.surname,
//   email: payload.email,
//   role: payload.role,
// };
