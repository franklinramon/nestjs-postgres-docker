import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service'; // UserService is responsible for logic
import { User } from './user.entity'; // User entity represents the data model

@Controller('users') // Defines the base route for all user-related endpoints
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Endpoint for creating a new user
  @Post()
  async create(@Body() createUserDto: { name: string; email: string }): Promise<User> {
    // Validate input (you could add more validation here)
    if (!createUserDto.name || !createUserDto.email) {
      throw new Error('Name and email are required!');
    }

    // Call UserService to create a new user
    return this.userService.createUser(createUserDto.name, createUserDto.email);
  }
}
