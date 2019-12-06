import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {User} from "./user.entity";
import {Repository} from "typeorm";
import bcrypt from "bcrypt";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    // async hashPassword( password ) {
    //     try {
    //         return await bcrypt.hash( password, parseInt( process.env.SALTROUNDS, 10 ) );
    //     } catch {
    //         throw new Error( "Failed to set password." );
    //     }
    // }

    async create( userData ) {
        const user = new User();
        user.userName = userData.userName;
        user.password = userData.password;
        // user.password = await this.hashPassword( userData.password );
        user.isAdmin = userData.isAdmin;
        return await this.userRepository.save( user );
    }

    async delete( userName ) {
        return await this.userRepository.delete( { userName } );
    }

    async getAll() {
        return await this.userRepository.find();
    }

    async findOne( userName ) {
        return await this.userRepository.findOne( { where: { userName } } );
    }
}
