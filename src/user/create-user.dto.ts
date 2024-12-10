import { IsString, IsEmail } from 'class-validator'; // Import validation decorators

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
