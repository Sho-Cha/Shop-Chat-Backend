import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsersProfilesTable1716347912531 implements MigrationInterface {
    name = 'CreateUsersProfilesTable1716347912531'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE user_profiles (
            _id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            user_id UUID NOT NULL REFERENCES users(_id) ON DELETE CASCADE,
            first_name VARCHAR(50),
            last_name VARCHAR(50),
            date_of_birth DATE,
            gender VARCHAR(20),
            phone_number VARCHAR(20),
            address TEXT,
            profile_picture BYTEA,
            biography TEXT,
            interests TEXT
        );        
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_profiles"`);
    }

}
