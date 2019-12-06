import {Body, Controller, Get, Param, Patch, Post, Delete} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "./create-user.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getAll() {
        return this.userService.getAll();
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto ) {
        return this.userService.create( createUserDto );
    }

    @Post( '/:id/delete' )
    async deleteUser(@Param() params ) {
        await this.userService.delete( params.id );
        return "done";
    }
}
