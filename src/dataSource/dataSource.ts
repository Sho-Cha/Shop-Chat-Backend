import { DataSource } from "typeorm";

export const dataBaseSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "postgres",
    logging: false,
    synchronize: false,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migrations/*.js']
})
