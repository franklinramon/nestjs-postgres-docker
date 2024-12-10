import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity'; // Import the User entity
import { CreateUserDto } from './create-user.dto'; // Import the DTO

@Injectable() // Marks the service to be injectable into other parts of the app
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>, // Inject the User repository to interact with the database
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find(); // This fetches all records from the User table
  }
  // Create a new user
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;

    return this.userRepository.save(user); // Save the user to the database
  }
}
