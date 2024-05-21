import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheService } from './common/caching/cache.service';
import { DatabaseModule } from './dataSource/database.module';
import { ConfigurationModule } from './common/config/config.module';
import { CachingModule } from './common/caching/caching.module';
import { ConfigurationService } from './common/config/config.service';
import { ConfigService } from '@nestjs/config';
@Module({
  imports: [CachingModule, ConfigurationModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService, ConfigurationService, ConfigService, CacheService],
})
export class AppModule { }
