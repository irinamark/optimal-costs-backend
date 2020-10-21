import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
// import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectsService } from './projects.service';
// import { Project } from './interfaces/project.interface';
import { Project } from './projects.entity'

@Controller('projects')
export class ProjectsController {
  constructor (private readonly projectService: ProjectsService) {}

  @Get()
  findAll () {
    return this.projectService.findAll()
  }

  @Get(':id')
  getProject (@Param() params) {
    return this.projectService.getProject(params.id)
  }

  @Post()
  async createProject (@Body() project: Project) {
    return this.projectService.createProject(project)
  }

  @Delete(':id')
  deleteProject (@Param() params) {
    return this.projectService.deleteProject(params.id)
  }

  // @Get(':id')
  // getPassword (@Param() params) {
  //   return this.projectService.getPassword(params.id)
  // }
}
