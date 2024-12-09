import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';  // We'll create this service next
import { User } from './user.entity';         // We'll also create this entity

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: { name: string; email: string }): Promise<User> {
    return this.userService.createUser(createUserDto.name, createUserDto.email);
  }
}
