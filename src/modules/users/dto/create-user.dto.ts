export class CreateUserDto {
    username: string;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    dateOfBirth?: string;
    gender?: string;
    phoneNumber?: string;
    address?: string;
    biography?: string;
    interests?: string;
    language?: string;
    timeZone?: string;
    termsAccepted?: boolean;
    newsletterSubscription?: boolean;
}
