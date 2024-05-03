import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './common/config/config.module';
import { CachingModule } from './common/caching/caching.module';
import { CacheService } from './common/caching/cache.service';

@Module({
  imports: [ConfigurationModule, CachingModule],
  controllers: [AppController],
  providers: [AppService, CacheService],
})
export class AppModule { }
