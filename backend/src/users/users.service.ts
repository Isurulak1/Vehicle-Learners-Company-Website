import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import  {User}  from '../entities/user.entity';
import { UserController } from './users.controller';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

   async getName(): Promise<string> {
    return 'User Service';
  }

  async createUser(userData: Partial<User>): Promise<User> {
    const user = this.userRepository.create(userData);
    return this.userRepository.save(user);
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async getUserById(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  async updateUser(id: number, updateData: Partial<User>): Promise<User> {
    await this.userRepository.update(id, updateData);
    return this.getUserById(id);
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
