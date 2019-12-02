import {Body, Controller, Get, Param, Patch, Post, Delete} from '@nestjs/common';
import {EmployeeService} from "./employee.service";

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) {}

    @Get()
    getAll() {
        return this.employeeService.getAll();
    }

    @Post()
    create(@Body() createEmployeeDto ) {
        return this.employeeService.create( createEmployeeDto );
    }

    @Post('/:id/set-building')
    setBuilding(@Body() updateBuildingDto, @Param() params ) {
        return this.employeeService.setBuilding( params.id, updateBuildingDto.buildingId );
    }

    @Patch('/:id')
    updateEmployee(@Body() createEmployeeDto, @Param() params ) {
        return this.employeeService.updateEmployee( params.id, createEmployeeDto );
    }

    @Post( '/:id/delete' )
    async deleteEmployee(@Param() params ) {
        await this.employeeService.delete( params.id );
    }
}
