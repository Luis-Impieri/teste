import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { Reservation } from './reservation.entity';

@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Get()
  findAll(): Promise<Reservation[]> {
    return this.reservationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Reservation> {
    return this.reservationService.findOne(id);
  }

  @Post()
  create(@Body() reservation: Reservation): Promise<Reservation> {
    return this.reservationService.create(reservation);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() reservation: Reservation): Promise<Reservation> {
    return this.reservationService.update(id, reservation);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.reservationService.remove(id);
  }
}
