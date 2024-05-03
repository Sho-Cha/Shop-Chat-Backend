import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const BASE_PORT = process.env.PORT ? process.env.port : 3000;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(BASE_PORT);
  console.warn(`Nest Application started on port :: ${BASE_PORT}`);
}
bootstrap();
