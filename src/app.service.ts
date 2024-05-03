import { Injectable } from '@nestjs/common';
import { CacheService } from './common/caching/cache.service';

@Injectable()
export class AppService {
  constructor(private readonly redis: CacheService) { }

  async getHello(): Promise<any> {
    await this.redis.set("HELLO_SHOP_CHAT", { from: "redis-cache", value: "Hello From Other Side" }, 2);
    return this.redis.get("HELLO_SHOP_CHAT");
  }
}
