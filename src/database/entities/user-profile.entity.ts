import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';
import User from './user.entity';

@Entity({ name: 'user_profiles' })
export default class UserProfile extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @OneToOne(() => User, { cascade: true })
  @JoinColumn({ name: 'user_id', referencedColumnName: '_id' })
  user_id: User;

  @Column({ type: String, nullable: true, name: 'first_name' })
  firstName: string;

  @Column({ type: String, nullable: true, name: 'last_name' })
  lastName: string;

  @Column({ type: 'date', nullable: true, name: 'date_of_birth' })
  dateOfBirth: string;

  @Column({ type: String, nullable: true, name: 'gender' })
  gender: string;

  @Column({ type: String, nullable: true, name: 'phone_number' })
  phoneNumber: string;

  @Column({ type: String, nullable: true, name: 'address' })
  address: string;

  @Column({ type: 'bytea', nullable: true, name: 'profile_picture' })
  profilePicture: Buffer;

  @Column({ type: String, nullable: true, name: 'biography' })
  biography: string;

  @Column({ type: String, nullable: true, name: 'interests' })
  interests: string;
}
