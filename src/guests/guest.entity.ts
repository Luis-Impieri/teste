import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Reservation } from '../reservation/reservation.entity';

@Entity()
export class Guest {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column()
  name: string;

  @Column({ type: 'varchar', length: 11 })  
  cpf: string;

  @Column({name: 'roomNumber', type: 'integer' })  
  roomNumber: number;

  @OneToMany(() => Reservation, reservation => reservation.guest)
  reservations: Reservation[];
}
