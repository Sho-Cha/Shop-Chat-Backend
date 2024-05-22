import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsersTable1716346870512 implements MigrationInterface {
    name = 'CreateUsersTable1716346870512'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            /* Enabling uuid-ossp to generate _id as unique. */
            `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

            CREATE TABLE users (
            user_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            username VARCHAR(50) NOT NULL UNIQUE,
            email VARCHAR(100) NOT NULL UNIQUE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            last_login TIMESTAMP,
            is_active BOOLEAN DEFAULT TRUE
        );`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
