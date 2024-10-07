import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Room } from '../rooms/room.entity';
import { Guest } from '../guests/guest.entity';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Room, rooms => rooms.reservations)
  room: Room;

  @ManyToOne(() => Guest, guest => guest.reservations)
  guest: Guest;

  @Column()
  checkInDate: Date;

  @Column()
  checkOutDate: Date;

  @Column()
  status: string;
}
