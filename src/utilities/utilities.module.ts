import { Module } from '@nestjs/common';
import { UtilitiesController } from './utilities.controller';
import { UtilitiesService } from './utilities.service';

import { TypeOrmModule } from '@nestjs/typeorm'
import { Utility } from './utilities.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Utility])],

  controllers: [UtilitiesController],
  providers: [UtilitiesService],
  exports: [TypeOrmModule, UtilitiesService]
})
export class UtilitiesModule {}
