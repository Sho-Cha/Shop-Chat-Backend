import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BaseEntity } from 'typeorm';
import User from './user.entity';

@Entity({name: "user_preferences"})
export default class UserPreference extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    _id: string;

    @OneToOne(() => User, {cascade: true})
    @JoinColumn({name: "user_id", referencedColumnName: "_id" })
    user_id: User;

    @Column({ type: String, nullable: true, name: 'language' })
    language: string;

    @Column({ type: String, nullable: true, name: 'time_zone' })
    timeZone: string;

    @Column({ type: Boolean, default: false, name: 'terms_accepted' })
    termsAccepted: boolean;

    @Column({ type: Boolean, default: false, name: 'newsletter_subscription' })
    newsletterSubscription: boolean;
}
