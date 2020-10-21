import { Module } from '@nestjs/common';
import { OthersController } from './others.controller';
import { OthersService } from './others.service';

import { TypeOrmModule } from '@nestjs/typeorm'
import { Other } from './others.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Other])],

  controllers: [OthersController],
  providers: [OthersService],
  exports: [TypeOrmModule, OthersService]
})
export class OthersModule {}
