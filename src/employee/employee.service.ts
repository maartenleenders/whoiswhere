import {forwardRef, Inject, Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Employee} from "./employee.entity";
import {MoreThanOrEqual, Repository} from "typeorm";
import {EventsGateway} from "../event/events.gateway";

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(Employee)
        private readonly employeeRepository: Repository<Employee>,
        @Inject(forwardRef( () => EventsGateway ) )
        private readonly eventsGateway: EventsGateway,
    ) {}

    async create( employeeData ) {
        const employee = new Employee();
        employee.firstName = employeeData.firstName;
        employee.lastName = employeeData.lastName;
        employee.isBhv = employeeData.isBhv || false;
        employee.priority = employeeData.priority || 10;
        return await this.employeeRepository.save( employee );
    }

    async delete( id ) {
        await this.employeeRepository.delete( { id } );
        this.eventsGateway.confirmDeletion( id );
        return;
    }
    async setBuilding( employeeId, buildingId ) {
        await this.employeeRepository.update( employeeId, { buildingId } );
        return "That went really well!";
    }

    async setPriority( employeeId, priority ) {
        return await this.employeeRepository.update( employeeId, { priority } );
    }

    async setBhv( employeeId, isBhv ) {
        return await this.employeeRepository.update( employeeId, { isBhv } );
    }

    async getAll() {
        return await this.employeeRepository.find( {
            order: {
                priority: "DESC",
                firstName: "ASC",
            },
        } );
    }

    async updateEmployee( employeeId, employeeData ) {
        const employee = await this.employeeRepository.findOne( employeeId );
        return await this.employeeRepository.update( employeeId, { ...employee, ...employeeData } );
    }
}
