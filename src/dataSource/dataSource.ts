import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "../users/entities/user.entity";
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const dataSourceOptions: DataSourceOptions = {
    type:"postgres",
    host:process.env.HOST,
    port:parseInt(process.env.PORT, 10),
    username:"postgres",
    password:"1234",
    database:process.env.DB_DATABASE,
    logging:false,
    synchronize : false,
    entities :['dist/**/*.entity.js'],
    migrations:['dist/migrations/*.js']
};
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
