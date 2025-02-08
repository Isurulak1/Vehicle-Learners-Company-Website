import {IsNotEmpty,IsEmail} from 'class-validator';


export class AuthorizedUserResultDto {
    accessToken: string;

    @IsNotEmpty()
    userName: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    city: string;

    @IsNotEmpty()
    gender: string;
  }
