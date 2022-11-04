import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from 'config/typeorm.config';
import { MathService } from './math.service';
import { User } from './user.entity';
import { UserService } from './user.service';
import { HelloModule } from './hello/hello.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    TypeOrmModule.forFeature([User]),
    HelloModule,
  ],
  controllers: [AppController],
  providers: [MathService, UserService],
})
export class AppModule {}
