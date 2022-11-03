import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { MathService } from './math.service';

interface INumberArray {
  data: number[];
}

interface ISumOfNumberArray {
  sum: number;
}

@Controller()
export class AppController {
  constructor(private mathService: MathService) {}

  @GrpcMethod('AppController', 'Accumulate')
  accumulate(numberArray: INumberArray, metadata: any): ISumOfNumberArray {
    console.log(metadata);
    return { sum: this.mathService.accumulate(numberArray.data) };
  }
}
