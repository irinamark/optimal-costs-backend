import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { EquipmentsService } from './equipments.service';
import { Equipment } from './equipments.entity'

@Controller('equipments')
export class EquipmentsController {
  constructor (private readonly equipmentService: EquipmentsService) {}

  @Get()
  findAll () {
    return this.equipmentService.findAll()
  }

  @Get(':id')
  getEquipment (@Param() params) {
    return this.equipmentService.getEquipment(params.id)
  }

  @Post()
  async createEquipment (@Body() equipment: Equipment) {
    return this.equipmentService.createEquipment(equipment)
  }

  @Delete(':id')
  deleteEquipment (@Param() params) {
    return this.equipmentService.deleteEquipment(params.id)
  }
}
