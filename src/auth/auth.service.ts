import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { GuestsService } from '../guests/guests.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly guestsService: GuestsService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(cpf: string, roomNumber: number): Promise<any> {
    const user = await this.guestsService.findOneByCPF(cpf);
    console.log('User:', user);  
    if (user) {
      console.log('User roomNumber:', user.roomNumber);
      console.log('Comparing roomNumber:', roomNumber, 'with', user.roomNumber);
    }
    if (user && user.roomNumber === roomNumber) {
      console.log('User validated');
      return user;
    }
    console.log('Validation failed');
    return null;
  }

  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto.cpf, loginDto.roomNumber);
    if (!user) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.cpf, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

