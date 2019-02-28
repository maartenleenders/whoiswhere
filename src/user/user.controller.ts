import {Body, Controller, Get, Param, Patch, Post} from '@nestjs/common';
import {UserService} from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    findAll(): string {
        return 'Returns all users';
    }

    @Post()
    create(@Body() createUserDto ) {
        return this.userService.create( createUserDto );
    }

    @Post('/:id/set-building')
    async setBuilding(@Body() updateBuildingDto, @Param() params ) {
        return await this.userService.setBuilding( params.id, updateBuildingDto.id );
    }
}
