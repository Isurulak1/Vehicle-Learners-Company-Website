import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/login-user.dto';
import { SignInUserDto } from './dto/SigninUser.dto';
import { AuthorizedUserResultDto } from './dto/Authorized-userResult.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  // Validate user by email & password
  async validateUser(loginUserDto: LoginUserDto): Promise<SignInUserDto | null> {
    const user = await this.userService.findUserByEmail(loginUserDto.email); 

    if (!user || user.password !== loginUserDto.password) {
      return null; 
    }

    return {
      userName: user.username,
      email: user.email,
      address: user.address,
      city: user.city,
      gender: user.gender,
    };
  }

  // Authenticate user and generate JWT token
  async authenticateUser(loginUserDto: LoginUserDto): Promise<AuthorizedUserResultDto> {
    const user = await this.validateUser(loginUserDto);

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return this.generateAuthResult(user);
  }

  // Generate JWT token for authenticated user
  async generateAuthResult(user: SignInUserDto): Promise<AuthorizedUserResultDto> {
    const tokenPayloadData = {
      userName: user.userName,
      email: user.email,
      address: user.address,
      city: user.city,
      gender: user.gender,
    };

    const accessToken = await this.jwtService.signAsync(tokenPayloadData);
    return { 
      accessToken, 
      userName: user.userName, 
      email: user.email, 
      address: user.address, 
      city: user.city, 
      gender: user.gender 
    };
  }
}
