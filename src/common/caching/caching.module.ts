import { Global, Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigService } from '@nestjs/config';
import { ConfigurationModule } from '../config/config.module';
const redisStore = require('cache-manager-redis-store').redisStore;

@Global()
@Module({
    imports: [
        CacheModule.registerAsync({
            imports: [ConfigurationModule],
            useFactory: async (config: ConfigService) => ({
                store: redisStore,
                host: config.get('REDIS_HOST'),
                port: config.get('REDIS_PORT'),
                auth_pass: config.get('REDIS_PASS')
            }),
            inject: [ConfigService]
        })
    ],
    exports: [CacheModule]
})

export class CachingModule { }


