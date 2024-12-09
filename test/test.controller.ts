import { Controller, Get } from '@nestjs/common';

@Controller('test')
export class TestController {
  @Get()
  getHello(): string {
    return 'Hello, darling! 💕 Your NestJS app is running!';
  }
}
