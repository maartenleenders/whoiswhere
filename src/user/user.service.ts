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
        user.firstName = userData.firstName;
        user.lastName = userData.lastName;
        user.age = userData.age;
        return await this.userRepository.save( user );
    }

    async setBuilding( userId, buildingId ) {
        console.log( buildingId );
        await this.userRepository.update( userId, { buildingId } );
        return "That went really well!";
    }

    async getAll() {
        return await this.userRepository.find();
    }

    async updateUser( userId, userData ) {
        const user = await this.userRepository.findOne( userId );
        return await this.userRepository.update( userId, { ...user, ...userData } );
    }
}