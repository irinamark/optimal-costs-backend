import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { OthersService } from './others.service';
import { Other } from './others.entity'


@Controller('others')
export class OthersController {
  constructor (private readonly otherService: OthersService) {}

  @Get()
  findAll () {
    return this.otherService.findAll()
  }

  @Get(':id')
  getOther (@Param() params) {
    return this.otherService.getOther(params.id)
  }

  @Post()
  async createOther (@Body() other: Other) {
    return this.otherService.createOther(other)
  }

  @Delete(':id')
  deleteOther (@Param() params) {
    return this.otherService.deleteOther(params.id)
  }
}
