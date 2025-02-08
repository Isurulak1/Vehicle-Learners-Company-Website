import { Controller, Post, Get, Body, HttpCode, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
    ) {}

    // Test endpoint
    @Get('abs')
    getTest() {
        return { message: 'Auth Module is working!' };
    }

    // Login endpoint for the users 
    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto) {
        const checkUser = await this.authService.authenticateUser(loginUserDto);

        if (!checkUser) {
            throw new UnauthorizedException('Invalid email or password');
        }
        return checkUser;
    }
}
