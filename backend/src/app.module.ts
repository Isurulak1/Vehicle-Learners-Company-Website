/*import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [AppController, UsersController, AuthController],
  providers: [AppService],
})
export class AppModule {}
*/

//import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import  {User}  from './entities/user.entity';
import { UserModule} from './users/users.module'
//import { UserController } from './users/user.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // Change if using a remote database
      port: 5432,
      username: 'postgres',
      password: 'Amiya@1234',
      database: 'community01',
      autoLoadEntities: true, // Automatically load entities (optional)
      entities: [User],
      synchronize: true, // Set to false in production
    }),
    TypeOrmModule.forFeature([User]),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}