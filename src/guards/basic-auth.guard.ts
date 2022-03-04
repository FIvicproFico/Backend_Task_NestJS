import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class BasicGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    if (request.headers.authorization) {
      const token = request.headers.authorization.split(' ')[1];
      if (token) return true;
    } else {
      throw new UnauthorizedException();
    }
  }
}
