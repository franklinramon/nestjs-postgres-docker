import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get() // This handles GET requests to /users
  async findAll(): Promise<User[]> {
    return this.userService.findAll(); // Add this method in UserService
  }
}
