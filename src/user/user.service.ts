import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {User} from "./user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async create( userData ) {
        const user = new User();
        user.userName = userData.firstName;
        user.password = userData.password;
        return await this.userRepository.save( user );
    }

    async delete( id ) {
        return await this.userRepository.delete( { id } );
    }

    async getAll() {
        return await this.userRepository.find();
    }

    async updateUser(userId, userData ) {
        const user = await this.userRepository.findOne( userId );
        return await this.userRepository.update( userId, { ...user, ...userData } );
    }
}
