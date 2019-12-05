import {forwardRef, Inject, Injectable} from '@nestjs/common';
import { UserService } from "../user/user.service";
import bcrypt from "bcrypt";

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef( () => UserService ))
        private readonly userService: UserService,
    ) {}

    async validateUser( userName: string, pass: string ): Promise<any> {
        const user = await this.userService.findOne( userName );
        if ( user && user.password ) {
            const match = await bcrypt.compare( pass, user.password );
            if ( match ) {
                console.log( "WOOP WOOP WE HAVE A MATCH" );
                return true;
            }
        }
        return null;
    }
}
