import { IsOptional } from 'class-validator';

export class CommonResponse {
    isOk: Boolean;
    message: String;
    @IsOptional()
    userId?: String
}