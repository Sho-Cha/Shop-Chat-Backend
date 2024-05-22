import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsersPreferencesTable1716348071075 implements MigrationInterface {
    name = 'CreateUsersPreferencesTable1716348071075'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE user_preferences (
            user_preference_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
            language VARCHAR(50),
            time_zone VARCHAR(50),
            terms_accepted BOOLEAN DEFAULT FALSE,
            newsletter_subscription BOOLEAN DEFAULT FALSE
        );        
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_preferences"`);
    }

}
