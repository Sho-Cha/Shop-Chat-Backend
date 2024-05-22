import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class UserProfile {
    @PrimaryGeneratedColumn('uuid')
    userProfileId: string;

    @OneToOne(() => User, user => user.userProfile)
    @JoinColumn()
    user: User;

    @Column({ nullable: true })
    firstName: string;

    @Column({ nullable: true })
    lastName: string;

    @Column({ type: 'date', nullable: true })
    dateOfBirth: string;

    @Column({ nullable: true })
    gender: string;

    @Column({ nullable: true })
    phoneNumber: string;

    @Column({ nullable: true })
    address: string;

    @Column({ type: 'bytea', nullable: true })
    profilePicture: Buffer;

    @Column({ nullable: true })
    biography: string;

    @Column({ nullable: true })
    interests: string;
}
