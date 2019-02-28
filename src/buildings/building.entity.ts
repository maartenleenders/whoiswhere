import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import {User} from "../user/user.entity";

@Entity()
export class Building {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    theme: string;

    @OneToMany( type => User, user => user.building )
    users: User[];
}
