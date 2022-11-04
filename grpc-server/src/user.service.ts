import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async create(name: string) {
    const entity = this.userRepository.create({ name: name });
    console.log(entity);
    return await this.userRepository.save(entity);
  }
}
