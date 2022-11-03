import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {
  accumulate(data: number[]): number {
    let result = 0;
    data.forEach((value) => {
      result += value;
    });
    return result;
  }
}
