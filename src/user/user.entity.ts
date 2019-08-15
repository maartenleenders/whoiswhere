import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import {Building} from "../buildings/building.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column( {nullable: true} )
    buildingId: number;

    @ManyToOne( type => Building, building => building.users )
    @JoinColumn({ name: "buildingId" })
    building: Building;
}
