import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
    constructor(private configService: ConfigService) { }

    get(configString: string) {
        return this.configService.get(configString);
    }
}
