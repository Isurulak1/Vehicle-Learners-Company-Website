
import {IsNotEmpty,IsEmail} from 'class-validator';


export class SignInUserDto {
    @IsNotEmpty()
    userName: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    city: string;

    @IsNotEmpty()
    gender: string;
  }
  