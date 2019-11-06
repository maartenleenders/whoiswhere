import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Employee} from "./employee.entity";
import {Repository} from "typeorm";

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(Employee)
        private readonly employeeRepository: Repository<Employee>,
    ) {}

    async create( employeeData ) {
        const employee = new Employee();
        employee.firstName = employeeData.firstName;
        employee.lastName = employeeData.lastName;
        return await this.employeeRepository.save( employee );
    }

    async delete( id ) {
        return await this.employeeRepository
            .delete( { id } );
    }
    async setBuilding( employeeId, buildingId ) {
        await this.employeeRepository.update( employeeId, { buildingId } );
        return "That went really well!";
    }

    async setListOrder( id, newPosition ) {
        // get all employees that are further down the list:
        // this.employeeRepository.find();
    };

    async getAll() {
        return await this.employeeRepository.find();
    }

    async updateEmployee(employeeId, employeeData ) {
        const employee = await this.employeeRepository.findOne( employeeId );
        return await this.employeeRepository.update( employeeId, { ...employee, ...employeeData } );
    }
}
