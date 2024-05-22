import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from 'src/database/entities/user.entity';
import { UserProfile } from 'src/database/entities/user-profile.entity';
import { UserPreference } from 'src/database/entities/user-preference.entity';
import { UserAuth } from 'src/database/entities/user-auth.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
        @InjectRepository(UserProfile) private userProfilesRepository: Repository<UserProfile>,
        @InjectRepository(UserPreference) private userPreferencesRepository: Repository<UserPreference>,
        @InjectRepository(UserAuth) private userAuthRepository: Repository<UserAuth>,
    ) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
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

        return this.usersRepository.save(user);
    }
}
