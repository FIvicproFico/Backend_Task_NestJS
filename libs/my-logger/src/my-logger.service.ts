import * as fs from 'fs';

import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable({ scope: Scope.REQUEST })
export class MyLoggerService {
  constructor(@Inject(REQUEST) private readonly request: Request) {}

  myLog(message: string): void {
    fs.appendFile(
      'logger.txt',
      new Date().toISOString() +
        '\t' +
        message +
        ', request: ' +
        JSON.stringify(this.request.body) +
        '\r\n',
      err => {
        if (err) throw err;
        console.log('Log Saved!');
      },
    );
  }
}
