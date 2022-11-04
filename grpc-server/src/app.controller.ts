import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { MathService } from './math.service';
import { UserService } from './user.service';

interface INumberArray {
  data: number[];
}

interface ISumOfNumberArray {
  sum: number;
}

@Controller()
export class AppController {
  constructor(
    private readonly mathService: MathService,
    private readonly userService: UserService,
  ) {}
  @GrpcMethod('AppController', 'Accumulate')
  accumulate(numberArray: INumberArray, metadata: any): ISumOfNumberArray {
    console.log(metadata);
    return { sum: this.mathService.accumulate(numberArray.data) };
  }

  @GrpcMethod('UserService', 'Create')
  async create(test: { name: string }) {
    const result = await this.userService.create(test.name);
    console.log(result);
    return { responseCode: 1, responseDesc: 'test' };
  }

  // @GrpcMethod('HelloService', 'FindOne')
  // async findOne(id: string) {
  //   console.log(id);
  //   console.log('test');
  //   return { response: id };
  // }
}
