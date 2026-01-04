import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { EmojiModule } from "./emoji/emoji.module";
import { ConfigModule } from "@nestjs/config";
import appConfig from "./config/app.config";
import { LoggerMiddleware } from "./common/logger/logger.middleware";
import { LoggerService } from "./logger.service";
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from "@nestjs/core";
import { AuthGuard } from "./common/auth/auth.guard";
import { BrowserInterceptor } from "./common/browser/browser.interceptor";
import { TransformResponseInterceptor } from "./common/transform-response/transform-response.interceptor";
import { AllExceptionsFilter } from "./common/all-exceptions/all-exceptions.filter";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, //makes env file available app wide
      load: [appConfig],
    }),

    EmojiModule,
  ],
  controllers: [AppController],

  providers: [
    AppService,
    LoggerService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: BrowserInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformResponseInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*");
  }
}
