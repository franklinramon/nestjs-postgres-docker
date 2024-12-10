import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async createUser(createUserDto: Partial<User>): Promise<User> {
    const newUser = this.userRepository.create(createUserDto); // Creates a new user instance
    return this.userRepository.save(newUser); // Saves the user to the database
  }
}
