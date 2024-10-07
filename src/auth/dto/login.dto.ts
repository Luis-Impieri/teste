import { IsNotEmpty, IsString, Length, IsInt } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  @Length(11, 11) 
  cpf: string;

  @IsNotEmpty()
  @IsInt()  
  roomNumber: number;
}
