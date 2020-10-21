import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
// import { User } from './interfaces/user.interface';
import { User } from './users.entity'

@Controller('users')
export class UsersController {
  constructor (private readonly userService: UsersService) {}

  @Get()
  findAll () {
    return this.userService.findAll()
  }

  @Get(':id')
  getUser (@Param() params) {
    return this.userService.getUser(params.id)
  }

  @Post()
  async createUser (@Body() user: User) {
    return this.userService.createUser(user)
  }

  @Delete(':id')
  deleteUser (@Param() params) {
    return this.userService.deleteUser(params.id)
  }

  @Get(':id')
  getPassword (@Param() params) {
    return this.userService.getPassword(params.id)
  }
}
