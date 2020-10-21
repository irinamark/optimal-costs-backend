import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { UtilitiesService } from './utilities.service';
import { Utility } from './utilities.entity'


@Controller('utilities')
export class UtilitiesController {
  constructor (private readonly utilityService: UtilitiesService) {}

  @Get()
  findAll () {
    return this.utilityService.findAll()
  }

  @Get(':id')
  getUtility (@Param() params) {
    return this.utilityService.getUtility(params.id)
  }

  @Post()
  async createUtility (@Body() utility: Utility) {
    return this.utilityService.createUtility(utility)
  }

  @Delete(':id')
  deleteUtility (@Param() params) {
    return this.utilityService.deleteUtility(params.id)
  }
}
