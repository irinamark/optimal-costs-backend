import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { Worker } from './workers.entity'

@Controller('worker')
export class WorkersController {
  constructor (private readonly workerService: WorkersService) {}

  @Get()
  findAll () {
    return this.workerService.findAll()
  }

  @Get(':id')
  getWorker (@Param() params) {
    return this.workerService.getWorker(params.id)
  }

  @Post()
  async createWorker (@Body() worker: Worker) {
    return this.workerService.createWorker(worker)
  }

  @Delete(':id')
  deleteWorker (@Param() params) {
    return this.workerService.deleteWorker(params.id)
  }
}
