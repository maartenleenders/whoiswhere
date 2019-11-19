import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import {Building} from "../building/building.entity";

@Entity()
export class Employee {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column( {nullable: true} )
    buildingId: number;

    @Column()
    priority: number;

    @Column()
    isBhv: boolean;

    @ManyToOne( type => Building, building => building.employees )
    @JoinColumn({ name: "buildingId" })
    building: Building;
}
