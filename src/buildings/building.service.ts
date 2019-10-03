import {Injectable, OnModuleInit} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Building} from "./building.entity";
import {Repository} from "typeorm";

@Injectable()
export class BuildingService implements OnModuleInit {
    constructor(
        @InjectRepository(Building)
        private readonly buildingRepository: Repository<Building>,
    ) {}

    async onModuleInit(): Promise<any> {
        const buildingCount = await this.buildingRepository.count();
        if ( buildingCount > 0 ) {
            return await Promise.resolve();
        }

        const building1 = this.buildingRepository.save(
            {
                id: 1,
                name: "building1",
                address: "",
                theme: "",
            }
        );
        const building2 = this.buildingRepository.save(
            {
                id: 2,
                name: "building2",
                address: "",
                theme: "",
            }
        );
        const building3 = this.buildingRepository.save(
            {
                id: 3,
                name: "building3",
                address: "",
                theme: "",
            }
        );
        const building4 = this.buildingRepository.save(
            {
                id: 4,
                name: "building4",
                address: "",
                theme: "",
            }
        );
        return await Promise.all( [ building1, building2, building3, building4 ] );
    }

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
