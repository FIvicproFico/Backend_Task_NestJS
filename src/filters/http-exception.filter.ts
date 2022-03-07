import * as fs from 'fs';

import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const error = {
      statusCode: status,
      message: exception.getResponse(),
      timestamp: new Date().toISOString(),
      path: request.url,
    };

    response.status(status).json(error);

    fs.appendFile(
      'logger.txt',
      new Date().toISOString() + '\t' + JSON.stringify(error) + '\r\n',
      err => {
        if (err) throw err;
        console.log('Exception saved!');
      },
    );
  }
}
