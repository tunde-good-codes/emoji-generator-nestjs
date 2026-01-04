import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from "@nestjs/common";
import { Request, Response } from "express";

@Catch()
export class AllExceptionsFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();
    const isException = exception instanceof HttpException;
    const statusCode = isException ? exception.getStatus() : 500;
    const request = host.switchToHttp().getRequest<Request>();

    response.json({
      message: isException ? exception["message"] : "internal server error",
      statusCode,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
