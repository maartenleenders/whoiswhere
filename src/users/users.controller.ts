import {Body, Controller, Get, Post} from '@nestjs/common';
import {User} from "./user.entity";
import {UsersService} from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    findAll(): string {
        return 'Returns all users';
    }

    @Post()
    create(@Body() createUserDto ) {
        return this.usersService.create( createUserDto );
    }
}
