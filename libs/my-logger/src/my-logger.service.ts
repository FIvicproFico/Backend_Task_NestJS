import { Injectable } from '@nestjs/common';

@Injectable()
export class MyLoggerService {
  myLog(input: string): void {
    console.log(`${input}!`);
  }
}
