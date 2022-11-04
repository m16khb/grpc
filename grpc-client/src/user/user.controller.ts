import { Body, Controller, OnModuleInit, Post } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { IUserService } from 'src/grpc.interface';
import { microserviceOptions } from 'src/grpc.options';
import { CreateUserDto } from './dto/create-user.dto';
@Controller('user')
export class UserController implements OnModuleInit {
  @Client(microserviceOptions)
  private client: ClientGrpc;

  private userService: IUserService;

  onModuleInit() {
    this.userService = this.client.getService<IUserService>('UserService');
  }

  @Post('add')
  async create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    console.log('test');
    return this.userService.create({ name: createUserDto.name });
  }
}
