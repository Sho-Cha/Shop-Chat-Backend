import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'user'})
export class User {
    @PrimaryGeneratedColumn()
    _id:UUID;

    @Column({})
    name:string;

    @Column({})
    password:string;
}