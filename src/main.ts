import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { AuthGuard } from "./common/auth/auth.guard";
import { BrowserInterceptor } from "./common/browser/browser.interceptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      disableErrorMessages: false,
    }),
  );
  app.useGlobalGuards(new AuthGuard());
  app.useGlobalInterceptors(new BrowserInterceptor())
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
