import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors:true,
  });
  app.enableCors({
    origin:['http://localhost:5173/','https://weather-telegram-bot-plum.vercel.app/'],
    methods: ['POST', 'PUT', 'DELETE', 'GET']
  });
  await app.listen(3000);
}
bootstrap();
