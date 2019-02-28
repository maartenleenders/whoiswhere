import {Controller, Get, Param, Post, Req} from '@nestjs/common';

@Controller('buildings')
export class BuildingsController {
    @Get()
    findAll() {
        return 'All buildings';
    }

    @Get(':id')
    findOne(@Param() params) {
        console.log(params.id);
        return `This action returns a #${params.id} building`;
    }

    @Post()
    create() {
        return 'This creates a new building';
    }
}
