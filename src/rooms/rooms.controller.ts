import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { Room } from './room.entity';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Get()
  findAll(): Promise<Room[]> {
    return this.roomsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Room> {
    return this.roomsService.findOne(id);
  }

  @Post()
  create(@Body() room: Room): Promise<Room> {
    return this.roomsService.create(room);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() room: Room): Promise<Room> {
    return this.roomsService.update(id, room);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.roomsService.remove(id);
  }
}
