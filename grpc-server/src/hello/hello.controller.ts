import { Controller } from '@nestjs/common';
import { HelloService } from './hello.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @GrpcMethod('HelloService', 'FindOne')
  async findOne(req: { id: string }) {
    return { response: req.id };
  }
}
