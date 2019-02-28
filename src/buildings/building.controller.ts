import {Body, Controller, Get, Param, Post } from '@nestjs/common';
import {BuildingService} from "./building.service";

@Controller('building')
export class BuildingController {
    constructor(private readonly buildingService: BuildingService) {}

    @Get()
    findAll() {
        return this.buildingService.getAll();
    }

    @Get(':id')
    findOne(@Param() params) {
        return this.buildingService.findOne( params.id );
    }

    @Post()
    create(@Body() createBuildingDto ) {
        return this.buildingService.create( createBuildingDto );
    }
}
