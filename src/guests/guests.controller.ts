import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { GuestsService } from './guests.service';
import { Guest } from './guest.entity';

@Controller('guests')
export class GuestsController {
  constructor(private readonly guestsService: GuestsService) {}

  @Get()
  async findAll(): Promise<Guest[]> {
    return this.guestsService.findAll();
  }

  @Get(':cpf')
  async findOneByCPF(@Param('cpf') cpf: string): Promise<Guest> {
    console.log('Controller - Searching for CPF:', cpf);
    return this.guestsService.findOneByCPF(cpf);
  }

  @Post()
  async create(@Body() guest: Partial<Guest>): Promise<Guest> {
    return this.guestsService.createGuest(guest);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() guest: Partial<Guest>): Promise<Guest> {
    return this.guestsService.updateGuest(id, guest);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.guestsService.removeGuest(id);
  }
}

