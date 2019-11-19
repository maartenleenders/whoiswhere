import {Entity, PrimaryColumn, Column, OneToMany} from 'typeorm';
import {Employee} from "../employee/employee.entity";

@Entity()
export class Building {

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    theme: string;

    @OneToMany( type => Employee, employee => employee.building )
    employees: Employee[];
}
