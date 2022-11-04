import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  async findOne() {
    return `This action returns a hello`;
  }
}
