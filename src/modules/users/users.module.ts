import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggingModule } from 'src/common/logging/logging.module';
import User from 'src/database/entities/user.entity';
import UserProfile from 'src/database/entities/user-profile.entity';
import UserPreference from 'src/database/entities/user-preference.entity';
import UserAuth from 'src/database/entities/user-auth.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserProfile, UserPreference, UserAuth]), LoggingModule],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule { }
