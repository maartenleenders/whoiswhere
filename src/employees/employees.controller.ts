import {Controller, Get} from '@nestjs/common';

@Controller('employees')
export class EmployeesController {
    @Get()
    findAll(): string {
        return 'Returns all employees';
    }
}
