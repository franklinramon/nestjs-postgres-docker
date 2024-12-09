import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  // Root route
  @Get()
  getRoot(): string {
    return 'Welcome to your NestJS app! 💖';
  }
}
