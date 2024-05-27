import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn, BaseEntity } from 'typeorm';
import User from './user.entity';

@Entity({name: "user_passwords"})
export default class UserAuth extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    _id?: string;

    @OneToOne(() => User, {cascade: true})
    @JoinColumn({name: "user_id", referencedColumnName: "_id" })
    user_id: User;

    @Column({ type: String, name: 'password_hash' })
    passwordHash: string;

    @Column({ type: String, nullable: true, name: 'password_salt' })
    passwordSalt: string;

    @CreateDateColumn({ type: String, nullable: true, name: 'password_last_updated' })
    passwordLastUpdated: Date;
}
