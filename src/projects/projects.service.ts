import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { Project } from './projects.entity';

@Injectable()
export class ProjectsService {
  constructor(@InjectRepository(Project) private projectsRepository: Repository<Project>) { }

  async findAll(): Promise<Project[]> {
    return await this.projectsRepository.find(/*{ relations: ['missions', 'missions.tasks'] }*/)
  }

  async findOne(_id: string): Promise<Project> {
    return await this.projectsRepository.findOne({ id: _id })
  }

  // async findProject(id: string, password: string): Promise<Project> {
  //   return await this.projectsRepository.findOne({
  //     where: {
  //       id: id,
  //       password: password
  //     }
  //   })
  // }

  async getProject(_id: string): Promise<Project[]> {
    return await this.projectsRepository.find({
      // relations: ['missions', 'missions.tasks'],
      where: [{ userId: _id }]
    })
  }

  async createProject(project) {
    return await this.projectsRepository.save(project)
  }

  async updateProject(project) {
    return await this.projectsRepository.update(project.id, project);
  }

  async deleteProject(_id) {
    return await this.projectsRepository.delete(_id)
  }

  // async getPassword(_id: string): Promise<Project[]> {
  //   return await this.projectsRepository.find({
  //     select: ['password'],
  //     where: [{ id: _id }]
  //   })
  // }
}
