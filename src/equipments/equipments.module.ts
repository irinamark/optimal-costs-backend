import { Module } from '@nestjs/common';
import { EquipmentsController } from './equipments.controller';
import { EquipmentsService } from './equipments.service';

import { TypeOrmModule } from '@nestjs/typeorm'
import { Equipment } from './equipments.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Equipment])],

  controllers: [EquipmentsController],
  providers: [EquipmentsService],
  exports: [TypeOrmModule, EquipmentsService]
})
export class EquipmentsModule {}
