import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import {Building} from "../buildings/building.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @ManyToOne( type => Building, building => building.users )
    building: Building;
}
