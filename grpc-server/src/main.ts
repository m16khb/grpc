import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { microserviceOptions } from './grpc.options';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions,
  );
  await app.listen();
}
bootstrap();
