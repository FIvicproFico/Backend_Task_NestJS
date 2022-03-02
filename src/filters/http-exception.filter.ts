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

    response.status(status).json({
      statusCode: status,
      message: exception.getResponse(),
      timestamp: new Date().toISOString(),
      path: request.url,
    });

    fs.writeFile(
      'logger.txt',
      JSON.stringify({
        statusCode: status,
        message: exception.getResponse(),
        timestamp: new Date().toISOString(),
        path: request.url,
      }),
      err => {
        if (err) throw err;
        console.log('Exception saved!');
      },
    );
  }
}
