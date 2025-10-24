/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateApartadoDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly cantidad: number;

  @IsNumber()
  @IsNotEmpty()
  readonly usuarioID: number;

  @IsNumber()
  @IsNotEmpty()
  readonly bebidasID: number;
}
