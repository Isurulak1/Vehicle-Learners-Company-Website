import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './users.service'
import { User } from '../entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get("me")
  async getName(): Promise<any> {
    return this.userService.getName();  // return directly, no 'await' before return
  }
  @Post('create')
  async createUser(@Body() userData: Partial<User>): Promise<User> {
    return this.userService.createUser(userData);
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<User> {
    return this.userService.getUserById(id);
  }

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() updateData: Partial<User>): Promise<User> {
    return this.userService.updateUser(id, updateData);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<{ message: string }> {
    await this.userService.deleteUser(id);
    return { message: 'User deleted successfully' };
  }
}
