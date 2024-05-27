import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsersPasswordsTable1716348187757 implements MigrationInterface {
    name = 'CreateUsersPasswordsTable1716348187757'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE user_passwords (
            _id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            user_id UUID NOT NULL REFERENCES users(_id) ON DELETE CASCADE,
            password_hash VARCHAR(255) NOT NULL,
            password_salt VARCHAR(255) NOT NULL,
            password_last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );        
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_passwords"`);
    }

}
