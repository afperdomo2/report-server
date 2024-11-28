import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Reports');
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  logger.log(`🚀 Running on PORT: 3000`);
}
bootstrap();
