import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheService } from './common/caching/cache.service';
import { DatabaseModule } from './database/database.module';
import { ConfigurationModule } from './common/config/config.module';
import { CachingModule } from './common/caching/caching.module';
import { ConfigurationService } from './common/config/config.service';
import { ConfigService } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { LoggingModule } from './common/logging/logging.module';
@Module({
  imports: [CachingModule, ConfigurationModule, LoggingModule, DatabaseModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, ConfigurationService, ConfigService, CacheService],
})
export class AppModule { }
