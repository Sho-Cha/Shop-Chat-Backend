import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class UserAuth {
    @PrimaryGeneratedColumn('uuid')
    userAuthId: string;

    @OneToOne(() => User, user => user.userAuth)
    @JoinColumn()
    user: User;

    @Column()
    passwordHash: string;

    @Column()
    passwordSalt: string;

    @CreateDateColumn()
    passwordLastUpdated: Date;
}
