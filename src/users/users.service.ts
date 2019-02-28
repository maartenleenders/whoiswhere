import { Injectable } from '@nestjs/common';
import {User} from "./user.entity";

@Injectable()
export class UsersService {
    create( userData ) {
        console.log( userData );
        const user = new User();
        user.firstName = userData.firstName;
        user.lastName = userData.lastName;
        user.age = userData.age;
        console.log( user );
        return user.id;
    }
}
