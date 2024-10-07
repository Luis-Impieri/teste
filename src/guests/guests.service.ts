import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource, EntityManager } from 'typeorm';
import { Guest } from './guest.entity';

@Injectable()
export class GuestsService {
  constructor(
    @InjectRepository(Guest)
    private guestsRepository: Repository<Guest>,
    private dataSource: DataSource,
  ) {
    console.log('GuestsRepository initialized:', this.guestsRepository);
  }

  async findAll(): Promise<Guest[]> {
    console.log('Finding all guests');
    const guests = await this.dataSource.query('SELECT * FROM guests');
    console.log('Guests found:', guests);
    return guests;
  }

  async findOneByCPF(cpf: string): Promise<Guest> {
    console.log('Searching for CPF:', cpf);
    const guests = await this.dataSource.query(`SELECT id, name, cpf, roomnumber AS "roomNumber" FROM guests WHERE cpf = $1`, [cpf]);
    console.log('Guest found:', guests);
    return guests.length > 0 ? guests[0] : null;
  }

  async createGuest(guest: Partial<Guest>): Promise<Guest> {
    console.log('Creating guest:', guest);
    try {
      const result = await this.dataSource.query(
        `INSERT INTO guests (name, cpf, roomnumber) VALUES ($1, $2, $3) RETURNING *`,
        [guest.name, guest.cpf, guest.roomNumber]
      );
      const savedGuest = result[0];
      console.log('Guest saved:', savedGuest);
      return savedGuest;
    } catch (error) {
      console.error('Error saving guest:', error);
      throw error;
    }
  }

  async updateGuest(id: number, guest: Partial<Guest>): Promise<Guest> {
    console.log('Updating guest:', guest);
    await this.dataSource.query(
      `UPDATE guests SET name = $1, roomnumber = $2 WHERE id = $3`,
      [guest.name, guest.roomNumber, id]
    );
    return this.findOneById(id);
  }
  async findOneById(id: number): Promise<Guest> {
    return this.guestsRepository.findOne({ where: { id } });
  }

  async removeGuest(id: number): Promise<void> {
    await this.guestsRepository.delete(id);
  }
}
