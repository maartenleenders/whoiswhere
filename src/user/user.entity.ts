import {Entity, Column, PrimaryColumn} from 'typeorm';

@Entity()
export class User {
    @PrimaryColumn()
    userName: string;

    @Column()
    password: string;

    @Column()
    isAdmin: boolean;
}
