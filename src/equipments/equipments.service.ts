import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { Equipment } from './equipments.entity';

@Injectable()
export class EquipmentsService {
  constructor(@InjectRepository(Equipment) private equipmentsRepository: Repository<Equipment>) { }

  async findAll(): Promise<Equipment[]> {
    return await this.equipmentsRepository.find(/*{ relations: ['missions', 'missions.tasks'] }*/)
  }

  async findOne(_id: string): Promise<Equipment> {
    return await this.equipmentsRepository.findOne({ id: _id })
  }

  // async findEquipment(id: string, password: string): Promise<Equipment> {
  //   return await this.equipmentsRepository.findOne({
  //     where: {
  //       id: id,
  //       password: password
  //     }
  //   })
  // }

  async getEquipment(_id: string): Promise<Equipment[]> {
    return await this.equipmentsRepository.find({
      // relations: ['missions', 'missions.tasks'],
      where: [{ id: _id }]
    })
  }

  async createEquipment(equipment) {
    return await this.equipmentsRepository.save(equipment)
  }

  async deleteEquipment(_id) {
    return await this.equipmentsRepository.delete(_id)
  }
}
