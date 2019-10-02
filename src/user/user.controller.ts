import {Body, Controller, Get, Param, Patch, Post, Delete} from '@nestjs/common';
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
        return this.userService.setBuilding( params.id, updateBuildingDto.buildingId );
    }

    @Patch('/:id')
    updateUser(@Body() createUserDto, @Param() params ) {
        return this.userService.updateUser( params.id, createUserDto );
    }

    @Post( '/:id/delete' )
    async deleteUser( @Param() params ) {
        console.log( "DELETE REQUEST INCOMING OMG!" );
        console.log( params );
        const response = await this.userService.delete( params.id );
        console.log( response );
    }
}
