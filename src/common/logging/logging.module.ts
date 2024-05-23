import { Module } from "@nestjs/common";
import { ConfigurationModule } from "../config/config.module";
import { LoggingService } from "./loggging.service";

@Module({
    imports: [ConfigurationModule],
    exports: [LoggingService],
    providers: [LoggingService]
})

export class LoggingModule { }