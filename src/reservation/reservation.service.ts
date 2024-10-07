import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Reservation } from './reservation.entity';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
    private dataSource: DataSource,
  ) {}

  async findAll(): Promise<Reservation[]> {
    return this.dataSource.query('SELECT * FROM reservation');
  }

  async findOne(id: number): Promise<Reservation> {
    return this.dataSource.query('SELECT * FROM reservation WHERE id = $1', [id]);
  }

  async create(reservation: Reservation): Promise<Reservation> {
    return this.reservationRepository.save(reservation);
  }

  async update(id: number, reservation: Reservation): Promise<Reservation> {
    await this.reservationRepository.update(id, reservation);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.reservationRepository.delete(id);
  }
}
