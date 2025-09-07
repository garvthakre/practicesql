import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    post:string;

    @Column();
    desc : string;
}