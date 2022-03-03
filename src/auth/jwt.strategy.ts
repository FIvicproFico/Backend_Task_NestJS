import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

import env from '../config/env-config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: env.accessTokenSecret,
    });
  }

  async validate(payload: any) {
    return {
      userId: payload.id,
      username: payload.username,
      name: payload.name,
      surname: payload.surname,
      email: payload.email,
      role: payload.role,
    };
  }
}
