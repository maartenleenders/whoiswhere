import {Body, Controller, Get, Param, Patch, Post} from '@nestjs/common';
import {UserService} from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getAll() {
        return this.userService.getAll();
    }

    @Post()
    create(@Body() createUserDto ) {
        return this.userService.create( createUserDto );
    }

    @Post('/:id/set-building')
    setBuilding(@Body() updateBuildingDto, @Param() params ) {
        return this.userService.setBuilding( params.id, updateBuildingDto.id );
    }
}
