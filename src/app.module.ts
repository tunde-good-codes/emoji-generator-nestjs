import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { EmojiModule } from "./emoji/emoji.module";
import { ConfigModule } from "@nestjs/config";
import appConfig from "./config/app.config";
import { LoggerMiddleware } from "./common/logger/logger.middleware";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, //makes env file available app wide
      load: [appConfig],
    }),

    EmojiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*");
  }
}
