import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from 'src/database/entities/user.entity';
import { UserProfile } from 'src/database/entities/user-profile.entity';
import { UserPreference } from 'src/database/entities/user-preference.entity';
import { UserAuth } from 'src/database/entities/user-auth.entity';
import * as bcrypt from 'bcrypt';
import { CommonResponse } from 'src/common/utils/common.response.types';
import { LoggingService } from 'src/common/logging/loggging.service';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
        @InjectRepository(UserProfile) private userProfilesRepository: Repository<UserProfile>,
        @InjectRepository(UserPreference) private userPreferencesRepository: Repository<UserPreference>,
        @InjectRepository(UserAuth) private userAuthRepository: Repository<UserAuth>,
        private log: LoggingService
    ) { }

    /*
     * To create a new user using these create user function.
     * @param {createUserDto} - having all of the user input data.
     * @returns {} 
      */
    async createUser(createUserDto: CreateUserDto): Promise<CommonResponse> {
        const { username, email, password, firstName, lastName, dateOfBirth, gender, phoneNumber, address, biography, interests, language, timeZone, termsAccepted, newsletterSubscription } = createUserDto;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const user = this.usersRepository.create({
            username,
            email,
            userProfile: this.userProfilesRepository.create({
                firstName,
                lastName,
                dateOfBirth,
                gender,
                phoneNumber,
                address,
                biography,
                interests,
            }),
            userPreference: this.userPreferencesRepository.create({
                language,
                timeZone,
                termsAccepted,
                newsletterSubscription,
            }),
            userAuth: this.userAuthRepository.create({
                passwordHash,
                passwordSalt: salt,
            }),
        });
        console.log("🚀 ~ UsersService ~ createUser ~ user:", user)

        const userSavedResponse = await this.usersRepository.save(user);
        console.log(userSavedResponse);
        return {
            isOk: true,
            message: "User registered successfully.",
            // userId: userSavedResponse?._id
        }
    }
}
