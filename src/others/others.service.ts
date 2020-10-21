import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { Other } from './others.entity';


@Injectable()
export class OthersService {
  constructor(@InjectRepository(Other) private othersRepository: Repository<Other>) { }

  async findAll(): Promise<Other[]> {
    return await this.othersRepository.find(/*{ relations: ['missions', 'missions.tasks'] }*/)
  }

  async findOne(_id: string): Promise<Other> {
    return await this.othersRepository.findOne({ id: _id })
  }

  // async findOther(id: string, password: string): Promise<Other> {
  //   return await this.othersRepository.findOne({
  //     where: {
  //       id: id,
  //       password: password
  //     }
  //   })
  // }

  async getOther(_id: string): Promise<Other[]> {
    return await this.othersRepository.find({
      // relations: ['missions', 'missions.tasks'],
      where: [{ id: _id }]
    })
  }

  async createOther(other) {
    return await this.othersRepository.save(other)
  }

  async deleteOther(_id) {
    return await this.othersRepository.delete(_id)
  }
}
