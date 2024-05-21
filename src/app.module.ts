import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './common/config/config.module';
import { CachingModule } from './common/caching/caching.module';
import { CacheService } from './common/caching/cache.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from './common/config/config.service';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { DataSource } from 'typeorm';
import { dataSourceOptions } from './dataSource/dataSource';


@Module({
  imports: [ConfigurationModule, CachingModule,
    TypeOrmModule.forRoot(dataSourceOptions), // DataBase connection
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, CacheService],

})
export class AppModule {
  constructor(private dataSource: DataSource) {}
 }
