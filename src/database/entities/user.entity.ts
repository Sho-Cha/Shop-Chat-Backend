import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  BaseEntity,
} from 'typeorm';
import UserAuth from './user-auth.entity';
import UserProfile from './user-profile.entity';
import UserPreference from './user-preference.entity';

@Entity({ name: 'users' })
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  _id?: string;

  @Column({ type: String, unique: true, name: 'username' })
  username: string;

  @Column({ type: String, unique: true, name: 'email' })
  email: string;

  @CreateDateColumn({ type: Date, nullable: true, name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: Date, nullable: true, name: 'updated_at' })
  updatedAt: Date;

  @Column({ type: Date, nullable: true, name: 'last_login' })
  lastLogin: Date;

  @Column({ type: Boolean, default: true, name: 'is_active' })
  isActive: boolean;

  @OneToOne(() => UserAuth, { cascade: true })
  userAuth: UserAuth;

  @OneToOne(() => UserProfile, {
    cascade: true,
  })
  userProfile: UserProfile;

  @OneToOne(() => UserPreference, { cascade: true })
  userPreference: UserPreference;
}
