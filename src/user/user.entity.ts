import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn( "uuid" )
    id: number;

    @Column()
    userName: string;

    @Column()
    password: string;

    @Column()
    isAdmin: boolean;
}
