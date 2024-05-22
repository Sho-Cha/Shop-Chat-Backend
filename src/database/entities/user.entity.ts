import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { UserProfile } from './user-profile.entity';
import { UserPreference } from './user-preference.entity';
import { UserAuth } from './user-auth.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    userId: string;

    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    email: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({ nullable: true })
    lastLogin: Date;

    @Column({ default: true })
    isActive: boolean;

    @OneToOne(() => UserProfile, userProfile => userProfile.user, { cascade: true })
    userProfile: UserProfile;

    @OneToOne(() => UserPreference, userPreference => userPreference.user, { cascade: true })
    userPreference: UserPreference;

    @OneToOne(() => UserAuth, userAuth => userAuth.user, { cascade: true })
    userAuth: UserAuth;
}
