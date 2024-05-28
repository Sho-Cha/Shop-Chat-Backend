import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { CommonResponse } from 'src/common/utils/common.response.types';
import { LoggingService } from 'src/common/logging/loggging.service';
import User from 'src/database/entities/user.entity';
import UserProfile from 'src/database/entities/user-profile.entity';
import UserPreference from 'src/database/entities/user-preference.entity';
import UserAuth from 'src/database/entities/user-auth.entity';
import { v4 as uuidv4 } from 'uuid';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from 'src/common/utils/messages';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(UserProfile)
    private userProfilesRepository: Repository<UserProfile>,
    @InjectRepository(UserPreference)
    private userPreferencesRepository: Repository<UserPreference>,
    @InjectRepository(UserAuth)
    private userAuthRepository: Repository<UserAuth>,
    private log: LoggingService,
  ) {}

  /*
   * To create a new user using these create user function.
   * @param {createUserDto} - having all of the user input data.
   * @returns {}
   */
  async createUser(createUserDto: CreateUserDto): Promise<CommonResponse> {
    try {
      /* Destructuring the CreateUserDto object. */
      const {
        username,
        email,
        password,
        firstName,
        lastName,
        dateOfBirth,
        gender,
        phoneNumber,
        address,
        biography,
        interests,
        language,
        timeZone,
        termsAccepted,
        newsletterSubscription,
      } = createUserDto;

      /* Generating unique salt to the user. */
      const salt = await bcrypt.genSalt();
      /* Generating password hash  */
      const passwordHash = await bcrypt.hash(password, salt);
      const userId = uuidv4();

      /* Create user */
      const user = this.usersRepository.create({
        _id: userId,
        username,
        email,

        /* Create user profile. */
        userProfile: this.userProfilesRepository.create({
          _id: uuidv4(),
          user_id: userId,
          firstName,
          lastName,
          dateOfBirth,
          gender,
          phoneNumber,
          address,
          biography,
          interests,
        }),

        /* Create user preferences. */
        userPreference: this.userPreferencesRepository.create({
          _id: uuidv4(),
          user_id: userId,
          language,
          timeZone,
          termsAccepted,
          newsletterSubscription,
        }),

        /* Create user password. */
        userAuth: this.userAuthRepository.create({
          _id: uuidv4(),
          user_id: userId,
          passwordHash,
          passwordSalt: salt,
        }),
      });

      /* Save user response. */
      const userSavedResponse = await this.usersRepository.save(user);

      /* Return success if registration successfully registered. */
      return {
        isOk: true,
        message: SUCCESS_MESSAGES.USER_REGISTRATION_SUCCESS,
        userId: userSavedResponse?._id,
      };
    } catch (error) {
      throw new HttpException(
        ERROR_MESSAGES.FAILED_TO_REGISTER_USER,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
