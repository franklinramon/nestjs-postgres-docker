import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller'; // Ensure AppController is properly imported
import { TestController } from '../test/test.controller'; // If you're still using the TestController
import { UserController } from './user/user.controller'; // User Controller
import { UserService } from './user/user.service'; // User Service
import { User } from './user/user.entity'; // User Entity

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the ConfigModule available globally
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true, // Automatically load entities without specifying them in the forFeature array
      synchronize: true, // WARNING: Disable this in production to prevent data loss
    }),
    TypeOrmModule.forFeature([User]), // Register the User entity with TypeORM
  ],
  controllers: [AppController, TestController, UserController], // Add your controllers here
  providers: [UserService], // Add your services here
})
export class AppModule {}
