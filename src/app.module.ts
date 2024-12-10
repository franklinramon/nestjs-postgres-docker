import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller'; // AppController import
import { TestController } from '../test/test.controller'; // TestController import (if still used)
import { UserController } from './user/user.controller'; // UserController import
import { UserService } from './user/user.service'; // UserService import
import { User } from './user/user.entity'; // User entity import

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the ConfigModule available globally
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST, // PostgreSQL host from .env
      port: parseInt(process.env.DB_PORT, 10), // PostgreSQL port from .env
      username: process.env.DB_USER, // PostgreSQL username from .env
      password: process.env.DB_PASS, // PostgreSQL password from .env
      database: process.env.DB_NAME, // PostgreSQL database from .env
      autoLoadEntities: true, // Automatically load entities
      synchronize: true, // WARNING: Use only in development
    }),
    TypeOrmModule.forFeature([User]), // Register User entity
  ],
  controllers: [
    AppController, // Include AppController
    TestController, // Include TestController if needed
    UserController, // Include UserController
  ],
  providers: [
    UserService, // Include UserService
  ],
})
export class AppModule {}
