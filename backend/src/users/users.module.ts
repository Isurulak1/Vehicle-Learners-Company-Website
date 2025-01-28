import { Module, Controller } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { UserController } from './users.controller';
import { UserService } from '../users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // ✅ Ensure this is correct
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}


