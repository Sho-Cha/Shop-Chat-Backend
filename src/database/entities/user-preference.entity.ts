import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class UserPreference {
    @PrimaryGeneratedColumn('uuid')
    userPreferenceId: string;

    @OneToOne(() => User, user => user.userPreference)
    @JoinColumn()
    user: User;

    @Column({ nullable: true })
    language: string;

    @Column({ nullable: true })
    timeZone: string;

    @Column({ default: false })
    termsAccepted: boolean;

    @Column({ default: false })
    newsletterSubscription: boolean;
}
