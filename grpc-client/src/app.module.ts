import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { HelloModule } from './hello/hello.module';
@Module({
  controllers: [AppController],
  imports: [UserModule, HelloModule],
})
export class AppModule {}
