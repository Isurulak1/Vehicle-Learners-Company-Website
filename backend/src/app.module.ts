import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // Change if using a remote database
      port: 5432,
      username: 'postgres',
      password: 'Amiya@1234',
      database: 'community01',
      autoLoadEntities: true, // Automatically load entities
      entities: [User],
      synchronize: true, // Set to false in production
    }),
    TypeOrmModule.forFeature([User]),
    UserModule,
    AuthModule, // Ensure AuthModule is imported here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
