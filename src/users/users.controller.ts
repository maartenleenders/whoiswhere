import {Body, Controller, Get, Post} from '@nestjs/common';
import {User} from "./user.entity";

@Controller('users')
export class UsersController {
    @Get()
    findAll(): string {
        return 'Returns all users';
    }

    @Post()
    create(@Body() createUserDto ) {
        console.log( createUserDto.age );
        const user = new User();
        user.age = createUserDto.age;
        user.firstName = createUserDto.firstName;
        user.lastName = createUserDto.lastName;
        console.log( user );
        return "Creating a new user is easy peazy";
    }
}
