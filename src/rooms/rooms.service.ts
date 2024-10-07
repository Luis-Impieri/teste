import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Room } from './room.entity';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private roomsRepository: Repository<Room>,
  ) {}

  findAll(): Promise<Room[]> {
    return this.roomsRepository.query('SELECT * FROM room');
  }

  findOne(id: number): Promise<Room> {
    return this.roomsRepository.query('SELECT * FROM room WHERE id = $1', [id]);
  }

  create(room: Room): Promise<Room> {
    return this.roomsRepository.save(room);
  }

  async update(id: number, room: Room): Promise<Room> {
    await this.roomsRepository.update(id, room);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.roomsRepository.delete(id);
  }
}
