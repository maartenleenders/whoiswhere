import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Building} from "./building.entity";
import {Repository} from "typeorm";

@Injectable()
export class BuildingService {
    constructor(
        @InjectRepository(Building)
        private readonly buildingRepository: Repository<Building>,
    ) {}

    async create( buildingData ) {
        const building = new Building();
        building.name = buildingData.name;
        building.address = buildingData.address;
        building.theme = buildingData.theme;
        return await this.buildingRepository.save( building );
    }

    async findOne( buildingId ) {
        return await this.buildingRepository.findOne( buildingId );
    }

    async getAll() {
        return await this.buildingRepository.find();
    }
}
