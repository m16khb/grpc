import { Body, Controller, OnModuleInit, Post } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { IGrpcService, IUserService } from './grpc.interface';
import { microserviceOptions } from './grpc.options';
import { CreateUserDto } from './user/dto/create-user.dto';

@Controller()
export class AppController implements OnModuleInit {
  @Client(microserviceOptions)
  private client: ClientGrpc;

  private grpcService: IGrpcService;
  private userService: IUserService;

  onModuleInit() {
    this.grpcService = this.client.getService<IGrpcService>('AppController');
    // this.userService = this.client.getService<IUserService>('UserController');
  }

  // @Post('test')
  // async create(@Body() createUserDto: CreateUserDto) {
  //   console.log(createUserDto);
  //   console.log('test');
  //   return this.userService.create({ name: createUserDto.name });
  // }

  @Post('add')
  async accumulate(@Body('data') data: number[]) {
    console.log('test');
    return this.grpcService.accumulate({ data });
  }
}
