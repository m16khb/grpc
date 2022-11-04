import { Controller, Get, OnModuleInit, Param } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { microserviceOptions } from 'src/grpc.options';
import { IHelloService } from 'src/grpc.interface';
import { firstValueFrom } from 'rxjs';

@Controller('hello')
export class HelloController implements OnModuleInit {
  @Client(microserviceOptions)
  private client: ClientGrpc;

  private helloService: IHelloService;

  onModuleInit() {
    this.helloService = this.client.getService<IHelloService>('HelloService');
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      console.log(id);
      const json = {
        name: 'habin',
        age: 27,
        tel: '010-3389-4529',
      };

      const result = await firstValueFrom(
        this.helloService.findOne({ id: JSON.stringify(json) }),
      );
      return JSON.parse(result.response);
    } catch (error) {
      console.log(error);
    }
  }
}
