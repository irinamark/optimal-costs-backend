import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { Utility } from './utilities.entity';

@Injectable()
export class UtilitiesService {
  constructor(@InjectRepository(Utility) private utilitiesRepository: Repository<Utility>) { }

  async findAll(): Promise<Utility[]> {
    return await this.utilitiesRepository.find(/*{ relations: ['missions', 'missions.tasks'] }*/)
  }

  async findOne(_id: string): Promise<Utility> {
    return await this.utilitiesRepository.findOne({ id: _id })
  }

  // async findUtility(id: string, password: string): Promise<Utility> {
  //   return await this.utilitiesRepository.findOne({
  //     where: {
  //       id: id,
  //       password: password
  //     }
  //   })
  // }

  async getUtility(_id: string): Promise<Utility[]> {
    return await this.utilitiesRepository.find({
      // relations: ['missions', 'missions.tasks'],
      where: [{ projectId: _id }]
    })
  }

  async createUtility(other) {
    return await this.utilitiesRepository.save(other)
  }

  async deleteUtility(_id) {
    return await this.utilitiesRepository.delete(_id)
  }
}
