import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { Worker } from './workers.entity';

@Injectable()
export class WorkersService {
  constructor(@InjectRepository(Worker) private workersRepository: Repository<Worker>) { }

  async findAll(): Promise<Worker[]> {
    return await this.workersRepository.find(/*{ relations: ['missions', 'missions.tasks'] }*/)
  }

  async findOne(_id: string): Promise<Worker> {
    return await this.workersRepository.findOne({ id: _id })
  }

  // async findWorker(id: string, password: string): Promise<Worker> {
  //   return await this.workersRepository.findOne({
  //     where: {
  //       id: id,
  //       password: password
  //     }
  //   })
  // }

  async getWorker(_id: string): Promise<Worker[]> {
    return await this.workersRepository.find({
      // relations: ['missions', 'missions.tasks'],
      where: [{ id: _id }]
    })
  }

  async createWorker(worker) {
    return await this.workersRepository.save(worker)
  }

  async deleteWorker(_id) {
    return await this.workersRepository.delete(_id)
  }
}
