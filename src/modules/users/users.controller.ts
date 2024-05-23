import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from 'src/database/entities/user.entity';
import { UsersService } from './users.service';
import { CommonResponse } from 'src/common/utils/common.response.types';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto): Promise<CommonResponse> {
        return await this.usersService.createUser(createUserDto);
    }
}
